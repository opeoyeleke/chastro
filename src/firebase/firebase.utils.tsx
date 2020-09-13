import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBN2mF8poj1EIPhICPV-Je4owNH-5Yh1p8",
  authDomain: "chastro-7f692.firebaseapp.com",
  databaseURL: "https://chastro-7f692.firebaseio.com",
  projectId: "chastro-7f692",
  storageBucket: "chastro-7f692.appspot.com",
  messagingSenderId: "193347474945",
  appId: "1:193347474945:web:ee2c742d58d717a31b1200",
  measurementId: "G-S9R0DYQJTZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
