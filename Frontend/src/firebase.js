// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-app-9ccb6.firebaseapp.com",
  projectId: "mern-auth-app-9ccb6",
  storageBucket: "mern-auth-app-9ccb6.firebasestorage.app",
  messagingSenderId: "188393250635",
  appId: "1:188393250635:web:c9e94b7a562288cc4cd2ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);