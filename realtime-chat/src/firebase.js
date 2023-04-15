// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBk7RFEnyYigoI40eCdexufg-qwnifsrk",
  authDomain: "realtime-chat-e1bdd.firebaseapp.com",
  projectId: "realtime-chat-e1bdd",
  storageBucket: "realtime-chat-e1bdd.appspot.com",
  messagingSenderId: "542324613286",
  appId: "1:542324613286:web:17b32c0afa9af7c39f5467"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// Create a root reference
export const storage = getStorage();