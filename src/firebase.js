import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDlRdkDxDfO8u_B2KoVqQ2Kq5-937lSGY4",
    authDomain: "e-clone-42976.firebaseapp.com",
    projectId: "e-clone-42976",
    storageBucket: "e-clone-42976.appspot.com",
    messagingSenderId: "725019656260",
    appId: "1:725019656260:web:407958a1f65a8c474dbc11",
    measurementId: "G-1VRJR73MNR"
});
// const db = firebaseApp.firestore();
const auth = firebase.auth();
export {  auth };