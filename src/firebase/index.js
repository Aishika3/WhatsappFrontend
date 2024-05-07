import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "whatsappbot-d206d.firebaseapp.com",
  databaseURL: "https://whatsappbot-d206d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "whatsappbot-d206d",
  storageBucket: "whatsappbot-d206d.appspot.com",
  messagingSenderId: "962167523453",
  appId: "1:962167523453:web:0cb13e92c657b0b2fd8914",
  measurementId: "G-16V22F5KNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase();

export {app, auth, db};
