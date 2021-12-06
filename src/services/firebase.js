import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAbtQRCf2trAyHxayzazKxIlTproRN-Ve0",
  authDomain: "geek-brains-react.firebaseapp.com",
  projectId: "geek-brains-react",
  storageBucket: "geek-brains-react.appspot.com",
  messagingSenderId: "22703563744",
  appId: "1:22703563744:web:00d262e1a18cc124368185",
  measurementId: "G-CK1KLW5VLG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass)

export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass)

export const logOut = async () => await signOut(auth)