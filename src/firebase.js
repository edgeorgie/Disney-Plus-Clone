import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbmd-NOcmbha5Jb0pgCR3CuGHAFSvE_GE",
  authDomain: "disney-plus-clone-e0b44.firebaseapp.com",
  projectId: "disney-plus-clone-e0b44",
  storageBucket: "disney-plus-clone-e0b44.appspot.com",
  messagingSenderId: "1042832063668",
  appId: "1:1042832063668:web:cf244db9fad1fba84febe1",
  measurementId: "G-TY47LM2726"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
