import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
const app = firebase.initializeApp({
  apiKey: 'AIzaSyD73hx1nBBSXLxwv7wn13RVNscgcQtPKqE',
  authDomain: 'sigile-retro.firebaseapp.com',
  databaseURL: 'https://sigile-retro.firebaseio.com',
  projectId: 'sigile-retro',
  storageBucket: 'sigile-retro.appspot.com',
  messagingSenderId: '34422052395',
  appId: '1:34422052395:web:b040d0c76d5462ec95fc6e',
});

export const auth = app.auth();
export const firestore = app.firestore();
export const timestamp =
  firebase.firestore.FieldValue.serverTimestamp;
export default app;
