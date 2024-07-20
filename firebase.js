// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAz42HYveXwGvFPCg5y39HbydxK8xxcAGI",
    authDomain: "portfolio-5e.firebaseapp.com",
    projectId: "portfolio-5e",
    storageBucket: "portfolio-5e.appspot.com",
    messagingSenderId: "274212365853",
    appId: "1:274212365853:web:b4e68774ad055cbf59c8f4"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
