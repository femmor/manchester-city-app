import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKJt7Db-v5vKJv42Sq3iVWG80PsT1Iiv0",
  authDomain: "manchester-city-project-85a45.firebaseapp.com",
  databaseURL: "https://manchester-city-project-85a45.firebaseio.com",
  projectId: "manchester-city-project-85a45",
  storageBucket: "manchester-city-project-85a45.appspot.com",
  messagingSenderId: "243259410535",
  appId: "1:243259410535:web:c548a427f73c42b5af6cc2",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
