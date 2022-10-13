// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgXkQHpvWqDvPLLkj-9JGNrjw4I530xl4",
  authDomain: "rn-instagram-clone-5bea9.firebaseapp.com",
  projectId: "rn-instagram-clone-5bea9",
  storageBucket: "rn-instagram-clone-5bea9.appspot.com",
  messagingSenderId: "64212009244",
  appId: "1:64212009244:web:d045f6aaaedb105bf13ad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}