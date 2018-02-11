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

  // server will notify changes
  const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val().name);
  }, (e) => {
      console.log('error: ', e);
  });




 
//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

//   database.ref().set({
//     name: 'Oskar',
//     age: 28,
//     stressLevel: '7',
//     job: {
//         title: 'Software dev',
//         company: 'Google'
//     },
//     location: {
//         city: 'KL',
//         country: 'MY'
//     },
//   }).then(() => {
//     console.log('data saved');
//   }).catch((e) => {
//     console.log('This failed', e);
//   });

//   database.ref().update({
//     'job/company': 'Amazon',
//     stressLevel: 9,
//     'location/city': 'seattle'
//   });

// database.ref().remove().then(() => {
//     console.log('done: ');
// }).catch((e) => {
//     console.log('something went wrong');
// });