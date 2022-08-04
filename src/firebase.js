import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBic0tIAyYi56U_9lZAUQW1ZLKxw_qy8Fg",
  authDomain: "eshop-81461.firebaseapp.com",
  projectId: "eshop-81461",
  storageBucket: "eshop-81461.appspot.com",
  messagingSenderId: "336479430028",
  appId: "1:336479430028:web:02ed04a07fa08f745722a9",
  measurementId: "G-32PV0Q4163",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
const signUpAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};
export {
  db,
  auth,
  signInAuthUserWithEmailAndPassword,
  signUpAuthUserWithEmailAndPassword,
};
