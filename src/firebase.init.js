// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAazvdDPWrNDTUGD1dK72EmiP47u8By1TA",
  authDomain: "react-emajhon.firebaseapp.com",
  projectId: "react-emajhon",
  storageBucket: "react-emajhon.appspot.com",
  messagingSenderId: "829379050040",
  appId: "1:829379050040:web:e66a05463e3cb8a24544cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;