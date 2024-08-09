// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzR2slwUshUYDXpUVk75sYhzEgASrAdJY",
  authDomain: "matrix2-0.firebaseapp.com",
  projectId: "matrix2-0",
  storageBucket: "matrix2-0.appspot.com",
  messagingSenderId: "39843818783",
  appId: "1:39843818783:web:88b39c4b855c61c522142a",
  measurementId: "G-S0BK08YSW0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);