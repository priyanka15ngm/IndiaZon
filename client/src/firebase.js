import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvGtozRTGEbsFAjAUvnNnCzhGfRWKg5i8",
  authDomain: "ecommerce-822b5.firebaseapp.com",
  projectId: "ecommerce-822b5",
  storageBucket: "ecommerce-822b5.appspot.com",
  messagingSenderId: "312669386464",
  appId: "1:312669386464:web:bdd2ba2de237605e394285",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
