// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWOGjndug_hvPz2s0BiAePOMbyaIpJj4w",
  authDomain: "wetalks-66885.firebaseapp.com",
  projectId: "wetalks-66885",
  storageBucket: "wetalks-66885.appspot.com",
  messagingSenderId: "577883817787",
  appId: "1:577883817787:web:7b32544414b475ddeb591e",
  measurementId: "G-Q49BXY77YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
// const analytics = getAnalytics(app);