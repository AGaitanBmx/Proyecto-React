// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{doc, getDoc, getDocs, collection, query, where, addDoc, updateDoc, writeBatch, getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfHZrctkZmssypt7jP0slLsEr1Jsi2Vds",
  authDomain: "ecommercereact-e9c57.firebaseapp.com",
  projectId: "ecommercereact-e9c57",
  storageBucket: "ecommercereact-e9c57.firebasestorage.app",
  messagingSenderId: "38859794574",
  appId: "1:38859794574:web:0e2014d866b202c2ee01df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getSingleProduct = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such document!");
  }
};
