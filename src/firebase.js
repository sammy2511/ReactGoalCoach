import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCEL7HXd9XnvwDI5dczPM19JZ__ordzXnc",
  authDomain: "react-firebase-project-c8f4b.firebaseapp.com",
  databaseURL: "https://react-firebase-project-c8f4b.firebaseio.com",
  projectId: "react-firebase-project-c8f4b",
  storageBucket: "react-firebase-project-c8f4b.appspot.com",
  messagingSenderId: "105412616508"
}

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completedGoalRef = firebase.database().ref('completed');
