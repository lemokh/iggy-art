import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDtZMC-_U1YDpWau0Z2LLLeQH-sT3id9O4",
    authDomain: "iggy-art.firebaseapp.com",
    databaseURL: "https://iggy-art.firebaseio.com",
    storageBucket: "iggy-art.appspot.com",
    messagingSenderId: "317962497152"
  };

export default firebase.initializeApp(config);
