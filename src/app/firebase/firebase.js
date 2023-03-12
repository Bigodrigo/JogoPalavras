// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtAE_07l9_SuxePJHrBqWYwVgdX5G0SzE",
  authDomain: "jogojubs.firebaseapp.com",
  projectId: "jogojubs",
  storageBucket: "jogojubs.appspot.com",
  messagingSenderId: "185139276455",
  appId: "1:185139276455:web:6a1c1e7abd962770d1c982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }