import { collection, addDoc, getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

interface UserData {
    email: string;
    password: string;
    name: string;
    age: number;
    weight: number;
    height: number;
    gender: string;
}
export const addUser = async (userData:UserData) => {
    const db=firebase.firestore();
  try {
    const docRef = await addDoc(collection(db, "users"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}