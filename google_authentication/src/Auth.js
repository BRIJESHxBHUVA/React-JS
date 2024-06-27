// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATTjOgKasUB48MFHZzSRwEDJUAmNUrGVA",
  authDomain: "login-event-91f19.firebaseapp.com",
  projectId: "login-event-91f19",
  storageBucket: "login-event-91f19.appspot.com",
  messagingSenderId: "445123254302",
  appId: "1:445123254302:web:519a418dc8be03f390b60f",
  measurementId: "G-N35R3B1EHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const provider = new GoogleAuthProvider();