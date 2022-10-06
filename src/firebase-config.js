import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmby5hrKC6YjS9XgLa9LaGNictEC_a6zQ",
    authDomain: "fir-istio.firebaseapp.com",
    projectId: "fir-istio",
    storageBucket: "fir-istio.appspot.com",
    messagingSenderId: "480035694387",
    appId: "1:480035694387:web:d900a8a00fb9d55fed8046",
    measurementId: "G-PJB1SBKBQK"
}
  const app = initializeApp(firebaseConfig);


  export const auth = getAuth(app);
  export const db = getFirestore(app);