// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhrXlKUVb-1--CWNsrw31synXneTnEPXE",
  authDomain: "first-6b5c5.firebaseapp.com",
  projectId: "first-6b5c5",
  storageBucket: "first-6b5c5.appspot.com",
  messagingSenderId: "668754026706",
  appId: "1:668754026706:web:40e270bea91682765d4d0b",
  measurementId: "G-04Y9RRRP6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
