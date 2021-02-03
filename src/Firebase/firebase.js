import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBdr2QwFXTA2fmOPTMseZrfLKcrkr4pgLA",
    authDomain: "contact-info-24c18.firebaseapp.com",
    projectId: "contact-info-24c18",
    storageBucket: "contact-info-24c18.appspot.com",
    messagingSenderId: "125211442824",
    appId: "1:125211442824:web:eee534be8f67c5e582e93d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.firestore();

  export default firebase;
