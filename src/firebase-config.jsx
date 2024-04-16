//firebase-config.jsx

import { initializeApp } from "firebase/app";

import { getAuth } from  'firebase/auth';

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
   apiKey: "AIzaSyD8f-ppue8PMJCzD3wO8_SENCfFqfiAiRo",
   authDomain: "goblo-react-auth.firebaseapp.com",
   projectId: "goblo-react-auth",
   storageBucket: "goblo-react-auth.appspot.com",
   messagingSenderId: "1001409852840",
   appId: "1:1001409852840:web:ad2a65a05eb401fe56199d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);