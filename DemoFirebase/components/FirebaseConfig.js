import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAJKBKEk_09iSUgU3yMrilBD3OtpITHOvU",
    authDomain: "fir-firebase-b7783.firebaseapp.com",
    databaseURL: "https://fir-firebase-b7783.firebaseio.com",
    projectId: "fir-firebase-b7783",
    storageBucket: "fir-firebase-b7783.appspot.com",
    messagingSenderId: "207413999443"
};

export const firebaseApp = firebase.initializeApp(config);