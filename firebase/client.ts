// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBKQNUNdWFFsQDlces_hWnmCgDk6bf3pBw",
  authDomain: "prep-9ee69.firebaseapp.com",
  projectId: "prep-9ee69",
  storageBucket: "prep-9ee69.firebasestorage.app",
  messagingSenderId: "859411812395",
  appId: "1:859411812395:web:e4ca5c04e74e4eefe79a6e",
  measurementId: "G-VLS1N8SX2X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);