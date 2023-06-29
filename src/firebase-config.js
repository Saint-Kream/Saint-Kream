// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// src/service/firebase.js
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo9KcPi2sI5RwVNghe3Sz8-F4yIKFqcq0",
  authDomain: "saint-kream.firebaseapp.com",
  projectId: "saint-kream",
  storageBucket: "saint-kream.appspot.com",
  messagingSenderId: "900126087256",
  appId: "1:900126087256:web:8e818678ec3583e66d522d",
  measurementId: "G-HS1KCZE6R6",
};

//...

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
