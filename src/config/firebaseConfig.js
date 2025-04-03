// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJt0LsJkZqlnXlmT3_449S_wiHrgKSVzA",
  authDomain: "ptac-828bc.firebaseapp.com",
  projectId: "ptac-828bc",
  storageBucket: "ptac-828bc.firebasestorage.app",
  messagingSenderId: "1035994151046",
  appId: "1:1035994151046:web:767839277f10c8ac60b907",
  measurementId: "G-FNNS64X24M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }