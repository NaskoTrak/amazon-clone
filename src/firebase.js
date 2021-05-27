import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    // Input your credentials here
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  });

  const db = firebase.firestore();
  const auth = firebase.auth();             
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }