// Import the functions you need from the SDKs you need
import { initializeApp , firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGKTcXr2DECduT7IKDpYEJX5LW9AHmHdk",
  authDomain: "blog-d9f15.firebaseapp.com",
  projectId: "blog-d9f15",
  storageBucket: "blog-d9f15.appspot.com",
  messagingSenderId: "802206891767",
  appId: "1:802206891767:web:e581f0a22a66538be99df2",
  measurementId: "G-SS4N3FSWGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = firebaseConfig.firestore()