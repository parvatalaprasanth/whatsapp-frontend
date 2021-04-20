// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAY48L7tRJDlZ-z0qaKMo984Bli4rQ3Ero",
    authDomain: "whatsapp-clone-be261.firebaseapp.com",
    projectId: "whatsapp-clone-be261",
    storageBucket: "whatsapp-clone-be261.appspot.com",
    messagingSenderId: "728835988589",
    appId: "1:728835988589:web:9a5d527804466a9120f364",
    measurementId: "G-QSKVBMHP7C"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebase.auth();



  export {db,auth,firebase}