const express = require("express");
const { getUser, addUser } = require("../api/users");
const { isValidPassword, createJSONToken } = require("../utils/auth");

const router = express.Router();

const invalidAuthenticationError = {
  title: "Invalid Authentication!",
  message: "Invalid Email or Password!",
};

router.post("/login", async (req, res) => {
  console.log("logging the users...");
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password)
    return res.status(422).json({ error: invalidAuthenticationError });

  try {
    const { user } = await getUser({ email: email });
    if (!user)
      return res.status(422).json({ error: invalidAuthenticationError });

    const checkPassword = await isValidPassword(password, user.password);
    if (!checkPassword)
      return res.status(422).json({ error: invalidAuthenticationError });

    const token = createJSONToken(user.id);
    return res.status(200).json({ token: token, userID: user.id });
  } catch (error) {
    console.log(error.message);
    return res.status(422).json({ error: invalidAuthenticationError });
  }
});

router.post("/signup", async (req, res) => {
  console.log("signing the users...");
  const email = req.body.email;
  const password = req.body.password;
  const username = req.body.username;

  if (
    !email ||
    !password ||
    !username ||
    email.trim().length === 0 ||
    username.trim().length === 0 ||
    password.trim().length === 0
  )
    return res.status(422).json({ error: "All the fields must be defined!" });

  try {
    const { user } = await getUser({ email: email });
    if (user)
      return res
        .status(422)
        .json({ error: "A user with that email already exists!" });

    const { id } = await addUser(email, password, username);
    if (!id) return res.status(422).json({ error: "Could not sign you up!" });

    console.log("creating token...");
    const token = createJSONToken(id);
    return res.status(200).json({ token: token, userID: id });
  } catch (error) {
    console.log(error.message);
    return res.status(422).json({ error: invalidAuthenticationError });
  }
});

module.exports = router;
