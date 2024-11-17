import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4dExhvv7TFvPrPvYiAZgNXt3P1iRYHJ8",
  authDomain: "krishnatest-7d2e8.firebaseapp.com",
  projectId: "krishnatest-7d2e8",
  storageBucket: "krishnatest-7d2e8.firebasestorage.app",
  messagingSenderId: "924969316396",
  appId: "1:924969316396:web:6fb9b261539e3a7effa189",
  measurementId: "G-QT03MCR2F8",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore(app);

export { app, firestore, auth, provider };
