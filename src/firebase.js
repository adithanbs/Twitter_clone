import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAZXm5TvbETWcVt5oqQQt0wJsU1r1lOFHE",
    authDomain: "twitter-clone-ca593.firebaseapp.com",
    projectId: "twitter-clone-ca593",
    storageBucket: "twitter-clone-ca593.appspot.com",
    messagingSenderId: "266595267117",
    appId: "1:266595267117:web:4a65c1a429359e1f543ea4",
    measurementId: "G-75TY3S2WTB"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  export default db; 