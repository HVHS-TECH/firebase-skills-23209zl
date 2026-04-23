/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
  apiKey: "AIzaSyDr_w7idgxVzZCoSgAfyJrE19q9x86cozY",
  authDomain: "jackson-li-12comp.firebaseapp.com",
  databaseURL: "https://jackson-li-12comp-default-rtdb.firebaseio.com",
  projectId: "jackson-li-12comp",
  storageBucket: "jackson-li-12comp.firebasestorage.app",
  messagingSenderId: "615513125295",
  appId: "1:615513125295:web:4a5a7af46b468ab019ff5a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
