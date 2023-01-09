import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBswTVWj7u60_-RO9HLkiTNuXqsm_3yNmU",
  authDomain: "loginwithauthenticate.firebaseapp.com",
  projectId: "loginwithauthenticate",
  storageBucket: "loginwithauthenticate.appspot.com",
  messagingSenderId: "566393856827",
  appId: "1:566393856827:web:70f55946a1e9e168194d1e"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();