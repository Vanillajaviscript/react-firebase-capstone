// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "sei-capstone-dc8bf.firebaseapp.com",
  projectId: "sei-capstone-dc8bf",
  storageBucket: "sei-capstone-dc8bf.appspot.com",
  messagingSenderId: "1033847904219",
  appId: "1:1033847904219:web:377e4dcd860ded089ab9fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
