import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "FIREBASE-AUTHENTICATION",
    authDomain: "FIREBASE-AUTHENTICATION",
    projectId: "FIREBASE-AUTHENTICATION",
    storageBucket: "FIREBASE-AUTHENTICATION",
    messagingSenderId: "FIREBASE-AUTHENTICATION",
    appId: "FIREBASE-AUTHENTICATION",
    measurementId: "FIREBASE-AUTHENTICATION"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
