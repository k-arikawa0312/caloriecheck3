// import { initializeApp,getApps } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// export const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_MESSAGE_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_ID,
//   measurementId: process.env.EXPO_PUBLIC_MEASUREMENT_ID,
// };


// const app = initializeApp(firebaseConfig);
// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }
// export const auth = getAuth(app);
// export const getFirebaseApp = () => {
//   return getApps()[0];
// };

import Constants from 'expo-constants';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: Constants.manifest.extra.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: Constants.manifest.extra.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: Constants.manifest.extra.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: Constants.manifest.extra.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: Constants.manifest.extra.EXPO_PUBLIC_MESSAGE_SENDER_ID,
  appId: Constants.manifest.extra.EXPO_PUBLIC_ID,
  measurementId: Constants.manifest.extra.EXPO_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
export const auth = getAuth(app);
export const getFirebaseApp = () => {
  return getApps()[0];
};