import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAFVr1I-VCAnPL2BJAULj5XAUrSksOdMpM',
  authDomain: 'birdsbuild-test-app.firebaseapp.com',
  projectId: 'birdsbuild-test-app',
  storageBucket: 'birdsbuild-test-app.appspot.com',
  messagingSenderId: '968457925574',
  appId: '1:968457925574:web:74d68cc0865cb48703f8c7',
  measurementId: 'G-GT40E0R3K8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const bandsRef = collection(db, 'bands');
export const contentRef = collection(db, 'content');
export const tracksRef = collection(db, 'tracks');
