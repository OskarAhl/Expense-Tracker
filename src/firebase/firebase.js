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

  database.ref().set({
    name: 'Oskar',
    age: 28,
    isSingle: false,
    location: {
        city: 'KL',
        country: 'MY'
    },
  }).then(() => {
    console.log('data saved');
  }).catch((e) => {
    console.log('This failed', e);
  });

  //   database.ref('age').set(27);
  database.ref('attributes').set({
      height: 192,
      weight: 92
  }).then(() => {
      console.log('attributes saved');
  }).catch((e) => {
    console.log(err);
  });
  console.log('here');