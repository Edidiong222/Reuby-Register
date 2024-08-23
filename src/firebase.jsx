import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDw1jKh1DNc_Uy3yojiRMfmyfdGj_D6Kfw",
    authDomain: "details-e14d1.firebaseapp.com",
    projectId: "details-e14d1",
    storageBucket: "details-e14d1.appspot.com",
    messagingSenderId: "1076470879022",
    appId: "1:1076470879022:web:927f4ea9ca28abbd1e60bf",
    measurementId: "G-10ZFMC1LMZ"
  };

  const app = initializeApp(firebaseConfig)

  const db = getFirestore(app)

  export {db} ;