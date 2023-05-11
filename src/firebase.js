import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  
    apiKey : "AIzaSyCBNqChQzDNglkPW1nnbgto1MGU9Y3U3kA" , 
    authDomain : "chat-1729c.firebaseapp.com" , 
    databaseURL : "https://chat-1729c-default-rtdb.firebaseio.com" , 
    projectId : "chat-1729c" , 
    storageBucket : "chat-1729c.appspot.com" , 
    messagingSenderId : "672429092230" , 
    appId : "1:672429092230:web:607b834914c88cc0b71007" 
    
  };





// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
// export const provider =  new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');

// firebase.auth().signInWithPopup(provider)
//   .then((result) => {
//     // ...
//   })
//   .catch((error) => {
//     // ...
//   });

