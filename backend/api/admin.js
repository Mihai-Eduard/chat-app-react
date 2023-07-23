const admin = require("firebase-admin");
const credentials = require("../credentials/firebase-admin-credentials.json");
const databaseURL =
  require("../credentials/firebase-database-details.json").databaseURL;
const { Storage } = require("@google-cloud/storage");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: databaseURL,
  storageBucket: "discord-app-6ae8f.appspot.com",
});

const storage = new Storage({
  keyFilename: "./credentials/firebase-admin-credentials.json",
});
const bucket = storage.bucket("gs://discord-app-6ae8f.appspot.com");

exports.admin = admin;
exports.bucket = bucket;
