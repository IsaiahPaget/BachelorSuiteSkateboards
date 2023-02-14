const functions = require("firebase-functions");
const dotenv = require("dotenv").config();

var admin = require("firebase-admin");

admin.initializeApp({
	credential: admin.credential.cert(process.env.ADMIN_API_KEY),
});
const db = admin.database();

console.log(functions);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

exports.contactsubmit = functions.https.onRequest((request, response) => {
	
  const data = request.data();

	response.send({ data: db, request: data });
});
