const functions = require('firebase-functions');
const admin = require("firebase-admin");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

 admin.initializeApp();
 const db = admin.firestore();

 exports.userCreated = functions.auth.user().onCreate(user => {
 return db
     .collection("users")
     .doc(user.uid)
     .set({
        isAdmin:false,
        email:user.email,
        avatar:user.photoURL
    }, {merge:true})

 });

 exports.userDeleted = functions.auth.user().onDelete(user => {
 return db
     .collection("users")
     .doc(user.uid)
     .delete();
 });