// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your web app's Firebase configuration (FROM YOUR INPUT)
const firebaseConfig = {
  apiKey: "AIzaSyAQi_9PATsfdGL_StdPbtyYJPZsla5SwDY",
  authDomain: "uin-rent-website.firebaseapp.com",
  projectId: "uin-rent-website",
  storageBucket: "uin-rent-website.firebasestorage.app",
  messagingSenderId: "200564838706",
  appId: "1:200564838706:web:e6b77a3e1c99d8d7ea472b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you need
export const db = getFirestore(app);
export const auth = getAuth(app);
