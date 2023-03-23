import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgcZJ194XVoG7B7bs9AAaqctNYgc4OQ4I",
  authDomain: "cooking-ninja-site-11f5b.firebaseapp.com",
  projectId: "cooking-ninja-site-11f5b",
  storageBucket: "cooking-ninja-site-11f5b.appspot.com",
  messagingSenderId: "668896211335",
  appId: "1:668896211335:web:899629374bdca2e121a322",
  measurementId: "G-ZREVLMWYCX"
};

// init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }