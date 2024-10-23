// import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth'
// import * as Google from 'expo-auth-session/providers/google'
// import * as WebBrowser from 'expo-web-browser'
// import { useEffect } from 'react'
// import { auth } from '@/firebase'
// import Constants from 'expo-constants'

// WebBrowser.maybeCompleteAuthSession()
// const useAuth = () => {
//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
//     webClientId: `${process.env.EXPO_PUBLIC_WEB_CLIENT_ID}`,
//   })
//   onAuthStateChanged(auth, (user) => {
//     if (user != null) {
//       console.log('We are authenticated now!')
//     }

//     // Do other things
//   })
//   const signOut = () => {
//     auth.signOut()
//   }
//   useEffect(() => {
//     if (response?.type === 'success') {
//       const { id_token } = response.params

//       const getCredential = GoogleAuthProvider.credential
//       const credential = getCredential(id_token)
//       signInWithCredential(auth, credential)
//     }
//   }, [response])

//   return { request, promptAsync, signOut }
// }

// export default useAuth
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../firebase';

// // GoogleSignin.configure({
// //   webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
// // });

// // const signInWithGoogle = async () => {
// //   try {
// //     const { idToken }  = await GoogleSignin.signIn() ;
// //     const credential = GoogleAuthProvider.credential(idToken);
// //     await signInWithCredential(auth, credential);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };

// // const provider = new GoogleAuthProvider();


// // const loginWithGoogle = async () => {
// //   try {
// //       const result = await signInWithPopup(auth, provider);
// //       const user = result.user;
// //       console.log(user);
// //   } catch (error) {
// //       console.error(error);
// //   }
// // };

// // export default loginWithGoogle;