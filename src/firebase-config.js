import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBmby5hrKC6YjS9XgLa9LaGNictEC_a6zQ",
    authDomain: "fir-istio.firebaseapp.com",
    projectId: "fir-istio",
    storageBucket: "fir-istio.appspot.com",
    messagingSenderId: "480035694387",
    appId: "1:480035694387:web:d900a8a00fb9d55fed8046",
    measurementId: "G-PJB1SBKBQK"
  };


  const app = initializeApp(firebaseConfig);


  export const auth = getAuth(app);
  export const db = getFirestore(app);


  const provider = new GoogleAuthProvider();

  export const signInWithGoogle =()=>{
      signInWithPopup(auth,provider)
      .then((result)=>{
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const userUID = result.user.uid;
        console.log(result);
        
        
        localStorage.setItem('uid', userUID);
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic',profilePic);
      })
      .catch((error)=>{
        console.log(error);
      })
  };