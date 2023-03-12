import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD0-5raMjdDRtwuD-H8gsjNC5pKUuYGN7Q",
    authDomain: "authentication-d16f5.firebaseapp.com",
    projectId: "authentication-d16f5",
    storageBucket: "authentication-d16f5.appspot.com",
    messagingSenderId: "931341878482",
    appId: "1:931341878482:web:25196a60fb8c8c1d26990b",
    measurementId: "G-NVM1B218KJ"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)