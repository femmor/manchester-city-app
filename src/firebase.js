import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

import {
  REACT_APP_API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "./environment";

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams")
const firebasePlayers = firebaseDB.ref("players")

export { firebase, firebaseMatches, firebasePromotions, firebaseTeams, firebaseDB, firebasePlayers };
