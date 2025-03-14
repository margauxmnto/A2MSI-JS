// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7uwz7BfEnCnTRz8pxRYj5aA3GcPLPO1k",
  authDomain: "a2msi-b02-js.firebaseapp.com",
  databaseURL: "https://a2msi-b02-js-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "a2msi-b02-js",
  storageBucket: "a2msi-b02-js.firebasestorage.app",
  messagingSenderId: "552955133505",
  appId: "1:552955133505:web:969eb6fe5417bcd25ad0c0",
  measurementId: "G-30KC3CZ36Y"
};

// Initialisation de Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();