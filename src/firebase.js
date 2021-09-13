import firebase from "firebase";
require('dotenv').config();

const firebaseConfig = {
  apiKey: "AIzaSyCW5wg1tcrLyXT5qao-q6Q5Wel1xu0ueNE",
  authDomain: "linkedinclonevis.firebaseapp.com",
  projectId: "linkedinclonevis",
  storageBucket: "linkedinclonevis.appspot.com",
  messagingSenderId: "158116709743",
  appId: "1:158116709743:web:be062d47b196541bcfd49a",
  measurementId: "G-6L9RNH64PB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
