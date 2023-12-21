// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjJ2dRNRKwiTrlDzWDoPRktdvCYHFzDpA",
    authDomain: "react-typescript-shoppingmall.firebaseapp.com",
    projectId: "react-typescript-shoppingmall",
    storageBucket: "react-typescript-shoppingmall.appspot.com",
    messagingSenderId: "999812563238",
    appId: "1:999812563238:web:ccc20bb89289960ace41e7",
    measurementId: "G-6CB794CQXV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);