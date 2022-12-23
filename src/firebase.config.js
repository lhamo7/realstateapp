import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA86WSCXyfIFeDB8dtbJcwzcuxCRrVNTZA",
  authDomain: "realstate-66c22.firebaseapp.com",
  projectId: "realstate-66c22",
  storageBucket: "realstate-66c22.appspot.com",
  messagingSenderId: "275895661239",
  appId: "1:275895661239:web:457231c525cbfda3629332"
};

 initializeApp(firebaseConfig);
 export const db= getFirestore();