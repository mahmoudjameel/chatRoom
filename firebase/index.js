import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO1GjKwTSu7MHPdziG1Pg3OUGgsbIE-K0",
  authDomain: "rn-app-05-aeb6e.firebaseapp.com",
  databaseURL: "https://rn-app-05-aeb6e-default-rtdb.firebaseio.com",
  projectId: "rn-app-05-aeb6e",
  storageBucket: "rn-app-05-aeb6e.appspot.com",
  messagingSenderId: "476817571818",
  appId: "1:476817571818:web:27a24e6735328eb10f3c93",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = app.auth();
const db = app.firestore();
var database = app.database();

export { firebase, auth, db, database };
