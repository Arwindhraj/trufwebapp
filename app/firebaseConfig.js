// app/components/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWG3QTgAZD0auuYSiosFnqc_ZPH1qPUDQ",
  authDomain: "login-f97c0.firebaseapp.com",
  projectId: "login-f97c0",
  storageBucket: "login-f97c0.appspot.com",
  messagingSenderId: "307880516676",
  appId: "1:307880516676:web:ef67dff7f21463c7b3f011",
  measurementId: "G-GT63FRXP8C"
};
let app;
if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  // Conditionally initialize analytics to avoid server-side issues
  // const analytics = getAnalytics(app);
}
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
