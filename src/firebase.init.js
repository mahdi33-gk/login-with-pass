
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPgdE_hGueHtXukVYHcVNdMQdQxzWWKew",
  authDomain: "loginpagelast.firebaseapp.com",
  projectId: "loginpagelast",
  storageBucket: "loginpagelast.firebasestorage.app",
  messagingSenderId: "470669517023",
  appId: "1:470669517023:web:03ae53588b47c023e2896a",
  measurementId: "G-WZELHL9FRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;