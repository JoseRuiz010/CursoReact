import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCozcv_zCbcELxF9jbuz97y872KlET0blM",
  authDomain: "reactappjournal-d6327.firebaseapp.com",
  projectId: "reactappjournal-d6327",
  storageBucket: "reactappjournal-d6327.appspot.com",
  messagingSenderId: "120630063361",
  appId: "1:120630063361:web:46e2d6f6ebf918f17dab00",
  measurementId: "G-4EL8CVXE7E",
};
initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = "it";
const provider = new GoogleAuthProvider();
//const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { provider, signInWithPopup, auth };
