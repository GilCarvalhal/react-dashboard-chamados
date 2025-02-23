import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRM8vA0pMfNfmWXRZm451DOkyaESRTHNU",
  authDomain: "chamado-77dd5.firebaseapp.com",
  projectId: "chamado-77dd5",
  storageBucket: "chamado-77dd5.firebasestorage.app",
  messagingSenderId: "142311937481",
  appId: "1:142311937481:web:53cccd99340509988d0418",
  measurementId: "G-JBCSX4ZS05",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
