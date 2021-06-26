import  firebase from "firebase/firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBaqtESmKXr1PrOniaMsAPQucSPavbR_S8",
    authDomain: "react-crud-2e7bd.firebaseapp.com",
    databaseURL: "https://react-crud-2e7bd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-crud-2e7bd",
    storageBucket: "react-crud-2e7bd.appspot.com",
    messagingSenderId: "659937042308",
    appId: "1:659937042308:web:6a11b3060968c91415c7d1",
    measurementId: "G-9HY4WS089N"
};
// Initialize Firebase
var firDb=firebase.initializeApp(firebaseConfig);


export default firDb.database().ref()