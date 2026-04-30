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
console.log(highscoreTable)
}

firebase.database().ref('/game/users/Kobe/').set(200);

let user = "James";
let score = 0;

firebase.database().ref('/game/users/' +user).set(
  score
);