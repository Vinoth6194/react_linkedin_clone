import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzuikLE8WCdDEzLciJjg32hx6HfDRMOB0",
  authDomain: "react-linkedin-clone.firebaseapp.com",
  projectId: "react-linkedin-clone",
  storageBucket: "react-linkedin-clone.appspot.com",
  messagingSenderId: "887934153254",
  appId: "1:887934153254:web:52c2ffe58f7e5f3dc0ace7",
  measurementId: "G-P19NKC95ZX",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
