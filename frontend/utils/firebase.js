// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexaiagent-c66c3.firebaseapp.com",
  projectId: "cortexaiagent-c66c3",
  storageBucket: "cortexaiagent-c66c3.firebasestorage.app",
  messagingSenderId: "1024225237836",
  appId: "1:1024225237836:web:dac7365fac20d985350de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()