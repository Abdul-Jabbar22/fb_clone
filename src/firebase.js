// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo2Qw_iNawZ01nF4Y1Q71d4wb3_V9TyTE",
  authDomain: "face-book-by-j.firebaseapp.com",
  projectId: "face-book-by-j",
  storageBucket: "face-book-by-j.appspot.com",
  messagingSenderId: "36754029159",
  appId: "1:36754029159:web:51a5f0e4f520c645b1f2c2",
  measurementId: "G-LCJPJZHGCB"
};



const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, provider };
export default db;
