// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBp4FpwOWCFU6EdqcO9MIdRcmX4kSLMPQ",
  authDomain: "coffee-store-8a4ba.firebaseapp.com",
  projectId: "coffee-store-8a4ba",
  storageBucket: "coffee-store-8a4ba.firebasestorage.app",
  messagingSenderId: "534348331731",
  appId: "1:534348331731:web:27eb90b0e65b6a5b6ff226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 