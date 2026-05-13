/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function kiaOra() {
  console.log("Kia Ora!()");
  firebase.database().ref('/').set(
    {
      message: 'Kia Ora!'
    }
  )
}

function goodbye() {
  console.log("Ka kite ano");
  firebase.database().ref('/').set(
    {
      message: 'Ka kite ano'
    }
  )
}

firebase.database().ref('/message').once('value', DO_THIS)
firebase.database().ref('/').child('message').once('value', display, fb_readError);

function DO_THIS(snapshot) {
  console.log(snapshot.val());
}

function simpleRead() {
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead, fb_readError);
  console.log("Leaving simpleRead")
}

function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
}

 function display(snapshot){
  var dbData = snapshot.val();
  if (dbData == null){
    console.log('There was no record when trying to read the message');
  }
  else {
    console.log('The message is: ' + dbData)
  }
 }

function fb_readError(error){
  console.log("There was an error reading the message");
  console.error(error);
}

function fb_readListener(){
  console.log("Read Listener");
  firebase.database().ref('/message').on('value', displayRead, fb_readError);
}

function highscoreTable(){
firebase.database().ref('/').set(
{
 game: {
  users: {
   Jackson: 100,
   Mark: 80,
   Mike: 60,
  }
 }
}
);
}

function fb_readHighScores(){
console.log("Reading High Scores");
firebase.database().ref('/game/users').once('value', fb_displayHighScore, fb_readError)
}

function fb_displayHighScore(snapshot){
  snapshot.forEach(fb_showOneScore)
}

function fb_showOneScore(child){
HTML_OUTPUT.innerHTML =  (child.key + " got "+ child.val() + " points "); 
}

firebase.database().ref('/game/users').orderByValue().once('value', fb_displayHighScore, fb_readError);

var GLOBAL_user;

function fb_login(){
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}

function fb_handleLogin(_user){
  if(_user){
    console.log("User Is Logged In")
    GLOBAL_user = _user;
  }else{
    console.log("User Is NOT Logged In - Starting the popup process")
    fb_popupLogin();
  }
}

function fb_popupLogin(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((result) => {
  GLOBAL_user = result.user; 
  console.log("User has logged in")
  });
}

let names = Object.keys(highscoreTable);


for(i = 0; i < names.length;i++){
  let key = names [i];
  console.log("Score " +i+" is for "+ key + ". "+ highscoreTable[key] + " points.")
}