const { compare } = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");

const KEY = require("../credentials/jwt-key-code.json").key;

function createJSONToken(id) {
  return sign({ id }, KEY, { expiresIn: "1h" });
}

function isValidPassword(password, storedPassword) {
  return compare(password, storedPassword);
}

function validateJSONToken(token) {
  return verify(token, KEY);
}

const notAuthorizedError = {
  title: "Not Authorized!",
  message: "Protected Resources!",
};

function checkAuthMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    console.log("token missing");
    return res.status(401).json({ error: notAuthorizedError });
  }

  const authData = req.headers.authorization.split(" ");
  if (authData.length !== 2) {
    console.log("bearer missing");
    return res.status(401).json({ error: notAuthorizedError });
  }

  const authToken = authData[1];
  try {
    const userID = validateJSONToken(authToken);
    req.token = userID["id"];
    console.log(req.token);
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ error: notAuthorizedError });
  }
  next();
}

exports.isValidPassword = isValidPassword;
exports.createJSONToken = createJSONToken;
exports.validateJSONToken = validateJSONToken;
exports.checkAuthMiddleware = checkAuthMiddleware;
