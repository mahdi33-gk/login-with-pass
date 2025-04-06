// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkT13Lsv7feObv5iIAKow6muoFw__4mtc",
  authDomain: "loginemailpass-f5392.firebaseapp.com",
  projectId: "loginemailpass-f5392",
  storageBucket: "loginemailpass-f5392.firebasestorage.app",
  messagingSenderId: "323223098876",
  appId: "1:323223098876:web:e62c4fc567cf68a4300e79",
  measurementId: "G-2B9EX1SVW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;