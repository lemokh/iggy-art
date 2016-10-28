import firebase from 'firebase';

const config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  }; // gitignored my keys


export default firebase.initializeApp(config);