import { collection, addDoc, getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import fb from "firebase/app";
import { firebaseConfig } from '@/firebase';

interface UserData {
    email: string;
    password: string;
    name: string;
    age: number|string;
    weight: number|string;
    height: number|string;
    gender: "male"|"female";
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db=getFirestore();
export const addUser = async (userData:UserData) => {
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}