import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVzlUv3pKUnJ-pHUOc1ZeznXeavCRZCAY",
  authDomain: "inventory-ivo.firebaseapp.com",
  databaseURL: "https://inventory-ivo.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
