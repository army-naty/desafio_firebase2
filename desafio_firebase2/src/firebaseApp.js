// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFkDwe_Er5fVGLT-WGIFOlTWGRUWT7YCI",
  authDomain: "fir-2-e3dfa.firebaseapp.com",
  projectId: "fir-2-e3dfa",
  storageBucket: "fir-2-e3dfa.appspot.com",
  messagingSenderId: "520365493952",
  appId: "1:520365493952:web:776dc34f5de689396be725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const $auth = getAuth(app)

export { $auth }