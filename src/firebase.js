import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCylcFnZiGtjOJXHUs3GJmZfMAdpf-pPL8",
  authDomain: "linkedin-clone-b80cf.firebaseapp.com",
  projectId: "linkedin-clone-b80cf",
  storageBucket: "linkedin-clone-b80cf.appspot.com",
  messagingSenderId: "667527851722",
  appId: "1:667527851722:web:e9eb55771ab2840b498e33",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
