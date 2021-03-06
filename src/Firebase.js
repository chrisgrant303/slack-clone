import firebase from "firebase";

const firebaseConfig = {
    apiKey: "******************************",
    authDomain: "slack-clone-22a14.firebaseapp.com",
    databaseURL: "https://slack-clone-22a14.firebaseio.com",
    projectId: "slack-clone-22a14",
    storageBucket: "slack-clone-22a14.appspot.com",
    messagingSenderId: "1087761807357",
    appId: "1:1087761807357:web:9668e1e4d068b3788c8b94"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    provider
};
export default db;
