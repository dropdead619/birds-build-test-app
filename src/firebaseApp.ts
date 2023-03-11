import { initializeApp } from 'firebase/app';

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
export const app = initializeApp(firebaseConfig);
