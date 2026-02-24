import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <--- Pastikan baris ini ADA

const firebaseConfig = {
  apiKey: "AIzaSyChWiNeQ8Myqlfm1QAl1LsPK2a5OGr_M7c",
  authDomain: "nextgen-web-257fb.firebaseapp.com",
  projectId: "nextgen-web-257fb",
  storageBucket: "nextgen-web-257fb.firebasestorage.app",
  messagingSenderId: "778138454377",
  appId: "1:778138454377:web:f7b9b9f0f44e3f577f55f8",
  measurementId: "G-5PP6H4NHQJ"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app); 