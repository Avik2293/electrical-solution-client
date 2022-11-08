// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJqq0PPlKx3rFzeWcIgu5YkLzCmmGkCxQ",
  authDomain: "electrical-solution-auth.firebaseapp.com",
  projectId: "electrical-solution-auth",
  storageBucket: "electrical-solution-auth.appspot.com",
  messagingSenderId: "194776248760",
  appId: "1:194776248760:web:c008733ffab93b1a901f4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;