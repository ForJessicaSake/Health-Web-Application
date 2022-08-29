import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQuOaQ9ROXwiJ32CwJPTh35bSHsCgmO8M",
    authDomain: "health-f9089.firebaseapp.com",
    projectId: "health-f9089",
    storageBucket: "health-f9089.appspot.com",
    messagingSenderId: "566619518316",
    appId: "1:566619518316:web:c942434a0b3d53d0fcef49",
    measurementId: "G-0W678M7DDE",
};

firebase.initializeApp(firebaseConfig);
export default firebase;