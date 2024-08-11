// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";






// // rohit firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvsZ9epc1sPOT1Ug5sulBhUmwS_yWGvBU",
  authDomain: "matrix-38ef3.firebaseapp.com",
  databaseURL: "https://matrix-38ef3-default-rtdb.firebaseio.com/",
  projectId: "matrix-38ef3",
  storageBucket: "matrix-38ef3.appspot.com",
  messagingSenderId: "918270132239",
  appId: "1:918270132239:web:matrix-38ef3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);