// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ZhhwhQed5106qfoiQeJMFV6c1fl7gxw",
  authDomain: "softwear-e8214.firebaseapp.com",
  projectId: "softwear-e8214",
  storageBucket: "softwear-e8214.appspot.com",
  messagingSenderId: "753515800487",
  appId: "1:753515800487:web:640b1400b28ee5cd24f882",
  measurementId: "G-HQ6PN0SSB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);