
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_Zc8u0Gihkwygtm_AflMSH27NuygZ-s8",
  authDomain: "chattychat-ec6da.firebaseapp.com",
  projectId: "chattychat-ec6da",
  storageBucket: "chattychat-ec6da.appspot.com",
  messagingSenderId: "749116432330",
  appId: "1:749116432330:web:93e58761ca08262a13f933",
  measurementId: "G-FX3LRFRG76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();