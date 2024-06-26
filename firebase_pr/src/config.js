
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

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
export const auth = getAuth(app)
