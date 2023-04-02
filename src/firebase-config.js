
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDB9opvgzANSkpP05C0f-A5eYDeHv3RVlU",
  authDomain: "react-crud-98a34.firebaseapp.com",
  projectId: "react-crud-98a34",
  storageBucket: "react-crud-98a34.appspot.com",
  messagingSenderId: "267229319359",
  appId: "1:267229319359:web:0c5ac93e59afea4062f60a",
  measurementId: "G-FWLQZPGXBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);