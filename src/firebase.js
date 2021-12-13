import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {

    apiKey: "AIzaSyCliu8ny4Vk24Fx8Q2yQYeBuV3JMhlQtJY",
  
    authDomain: "travel-companion-56f89.firebaseapp.com",
  
    projectId: "travel-companion-56f89",
  
    storageBucket: "travel-companion-56f89.appspot.com",
  
    messagingSenderId: "101407255222",
  
    appId: "1:101407255222:web:bd833ef858ca71026dd417",
  
    measurementId: "G-ZZMRX93T6B"
  
  };
  
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Get a list of cities from your database
/*async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}*/

const auth = getAuth();
export function signInWithPopup(auth, provider)
  this.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
