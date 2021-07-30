import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCjATnhAa7FIf-fmaIX4egZB7xkYsyCOQI",
  authDomain: "quiz-app-522a9.firebaseapp.com",
  projectId: "quiz-app-522a9",
  storageBucket: "quiz-app-522a9.appspot.com",
  messagingSenderId: "905126714631",
  appId: "1:905126714631:web:6b808cd7cc5b61ab8279a2",
};
// Initialize Firebase
let firebaseApp=firebase.initializeApp(firebaseConfig);
export let firebaseAuth=firebaseApp.auth();
export let firebaseDB=firebaseApp.firestore();
export let firebaseStorage=firebaseApp.storage();


