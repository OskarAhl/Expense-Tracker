// * take ALL named exports and put them under firebase
import * as firebase from 'firebase';

// make connection to db
const config = {
    apiKey: "AIzaSyAx3HKsGx4MVEsnmfxV2GadjLJ0xIxXE18",
    authDomain: "expense-tracker-8ffda.firebaseapp.com",
    databaseURL: "https://expense-tracker-8ffda.firebaseio.com",
    projectId: "expense-tracker-8ffda",
    storageBucket: "expense-tracker-8ffda.appspot.com",
    messagingSenderId: "358471724244"
  };
  firebase.initializeApp(config);
  
// to access database functionality
const database = firebase.database();