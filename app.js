// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYzmLqDZQx6D0MBS7pcKM4ICSykgSyQiU",
  authDomain: "reservation-20.firebaseapp.com",
  projectId: "reservation-20",
  storageBucket: "reservation-20.firebasestorage.app",
  messagingSenderId: "238046004178",
  appId: "1:238046004178:web:38122eab26f1508dd4fe0b",
  measurementId: "G-NMP3T3V30T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
