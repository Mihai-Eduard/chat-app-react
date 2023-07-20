const { compare } = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");

const KEY = require("../credentials/jwt-key-code.json").key;

function createJSONToken(username) {
  return sign({ username: username }, KEY, { expiresIn: "1h" });
}

function isValidPassword(password, storedPassword) {
  return compare(password, storedPassword);
}

function validateJSONToken(token) {
  return verify(token, KEY);
}

function checkAuthMiddleware(req, res, next) {
  if (req.method === "OPTIONS") return next();

  if (!req.headers.authorization) {
    console.log("token missing");
    return next({ status: 401, message: "Not Authorized!" });
  }

  const authData = req.headers.authorization.split(" ");
  if (authData.length !== 2) {
    console.log("bearer missing");
    return next({ status: 401, message: "Not Authorized!" });
  }

  const authToken = authData[1];
  try {
    const data = validateJSONToken(authToken);
    req["username"] = data["username"];
    console.log(req["username"]);
    next();
  } catch (error) {
    console.log(error.message);
    return next({ status: 401, message: "Not Authorized!" });
  }
}

exports.isValidPassword = isValidPassword;
exports.createJSONToken = createJSONToken;
exports.validateJSONToken = validateJSONToken;
exports.checkAuthMiddleware = checkAuthMiddleware;
