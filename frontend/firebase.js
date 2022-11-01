// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTlYM-_UnP_00uc_7OZA6ZU301bDfi3-o",
  authDomain: "lawapp-1d4ea.firebaseapp.com",
  projectId: "lawapp-1d4ea",
  storageBucket: "lawapp-1d4ea.appspot.com",
  messagingSenderId: "691337163760",
  appId: "1:691337163760:web:e1dd4590d07a9ec4fba335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
