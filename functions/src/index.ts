import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://birdsbuild-test-app-default-rtdb.europe-west1.firebasedatabase.app',
});

// Main app
const app = express();
app.use(cors({ origin: true }));

// Main database reference
const db = admin.firestore();

// Function helpers
const productsQueryBuilder = (req: any, query: any, currentProductType: { queryName: string; query: any }) => {
  let modifiedQuery;

  const sellingType = req.query.sellingType;
  const searchQuery = req.query.q?.toString().trim();

  if (sellingType !== undefined && searchQuery !== undefined && searchQuery !== '') {
    modifiedQuery = query
      .where('title', '>=', searchQuery).where('title', '<=', `${searchQuery}\uF8FF`)
      .where(currentProductType.queryName, '==', currentProductType.query)
      .where('sellingType', '==', sellingType) as any;
  }
  else if (sellingType !== undefined) {
    modifiedQuery = query
      .where(currentProductType.queryName, '==', currentProductType.query)
      .where('sellingType', '==', sellingType) as any;
  }
  else if (searchQuery !== undefined && searchQuery !== '') {
    modifiedQuery = query
      .where(currentProductType.queryName, '==', currentProductType.query)
      .where('title', '>=', searchQuery).where('title', '<=', `${searchQuery}\uF8FF`);
  }
  else {
    modifiedQuery = query.where(currentProductType.queryName, '==', currentProductType.query) as any;
  }

  return modifiedQuery;
};

// Routes

app.get('/products', (req, res) => {
  (async () => {
    try {
      let query = db.collection('products');

      if (req.query.isFavorite !== undefined && req.query.isFavorite) {
        query = productsQueryBuilder(req, query, {
          query: true,
          queryName: 'isFavorite',
        });
      }
      else {
        query = productsQueryBuilder(req, query, {
          query: false,
          queryName: 'isFavorite',
        });
      }

      const snapshot = await query.get();
      const items = snapshot.docs.map(doc => doc.data());

      return res.status(200).send({
        status: 'Success',
        data: items,
      });
    }
    catch (error) {
      return res.status(500).send({ status: 'Failed', message: error });
    }
  })();
});

app.get('/deals', (req, res) => {
  (async () => {
    try {
      let query = db.collection('deals');

      query = productsQueryBuilder(req, query, {
        query: true,
        queryName: 'isInDeal',
      });

      const snapshot = await query.get();
      const items = snapshot.docs.map(doc => doc.data());

      return res.status(200).send({
        status: 'Success',
        data: items,
      });
    }
    catch (error) {
      return res.status(500).send({ status: 'Failed', message: error });
    }
  })();
});

app.post('/deals/add', (req, res) => {
  (async () => {
    try {
      const dealId = Date.now();
      await db.collection('deals').doc(`${dealId}`).create({
        id: dealId,
        sellingType: req.body.sellingType,
        title: req.body.title,
        location: req.body.location,
        seller: req.body.seller,
        productType: req.body.productType,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        pricePerOne: req.body.pricePerOne,
        count: req.body.count,
        isFavorite: req.body.isFavorite,
        isInDeal: true,
        isPaid: req.body.isPaid,
      });

      return res.status(200).send({
        status: 'Success',
        msg: 'Successfully added to deals',
      });
    }
    catch (error) {
      return res.status(500).send({ status: 'Failed', message: error });
    }
  })();
});

app.put('/deals/pay/:id', (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection('deals').doc(req.params.id);

      await reqDoc.update({
        isPaid: true,
      });

      return res.status(200).send({
        status: 'Success',
        msg: 'Payment success',
      });
    }
    catch (error) {
      return res.status(500).send({ status: 'Failed', message: error });
    }
  })();
});

app.put('/products/update/:id', (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection('products').doc(req.params.id);
      const data = await reqDoc.get();
      const isFavoriteField = await data.get('isFavorite');

      await reqDoc.update({
        isFavorite: !isFavoriteField,
      });

      return res.status(200).send({
        status: 'Success',
        msg: 'Data updated',
      });
    }
    catch (error) {
      return res.status(500).send({ status: 'Failed', message: error });
    }
  })();
});

exports.api = functions.https.onRequest(app);
