// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDIoS0XIA_mCXfYbERmr9pH5MKmr2lqoaE",
    authDomain: "clone-ed934.firebaseapp.com",
    projectId: "clone-ed934",
    storageBucket: "clone-ed934.appspot.com",
    messagingSenderId: "255278377811",
    appId: "1:255278377811:web:0ac2ae4215ad8453754fa6",
    measurementId: "G-4K503VYKXN"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { db, provider, auth }