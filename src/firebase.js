// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "react-capstone-ade11.firebaseapp.com",
  projectId: "react-capstone-ade11",
  storageBucket: "react-capstone-ade11.appspot.com",
  messagingSenderId: "1022160562859",
  appId: "1:1022160562859:web:70dfd9df0c0626672425ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);