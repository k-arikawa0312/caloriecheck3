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
  console.log(userData)
  try {
    const docRef = await firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password);
    console.log("User created with UID: ", docRef.user?.uid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}