const admin = require("firebase-admin");
const credentials = require("../credentials/firebase-admin-credentials.json");
const databaseURL =
  require("../credentials/firebase-database-details.json").databaseURL;

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: databaseURL,
});

exports.admin = admin;
