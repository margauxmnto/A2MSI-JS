// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBd9qGSmQITJMPjQXqpjba3e1XGU3lZvg",
  authDomain: "a2msi-js.firebaseapp.com",
  databaseURL: "https://a2msi-js-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "a2msi-js",
  storageBucket: "a2msi-js.firebasestorage.app",
  messagingSenderId: "363843091318",
  appId: "1:363843091318:web:392b7a74a9757c0883d857"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

console.log("Firebase initialisé :", app.name);