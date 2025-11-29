// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWPMXLD2fN9rtgurPzbBh-YUGBcN9ALk8",
  authDomain: "tienda-7045d.firebaseapp.com",
  projectId: "tienda-7045d",
  storageBucket: "tienda-7045d.firebasestorage.app",
  messagingSenderId: "96869712326",
  appId: "1:96869712326:web:568910e183bc9222d732c7",
  measurementId: "G-DJ70R1FV4M",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
