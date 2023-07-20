const express = require("express");
const { getUser } = require("../api/users");
const { isValidPassword, createJSONToken } = require("../utils/auth");

const router = express.Router();

const invalidAuthenticationError = {
  title: "Invalid Authentication!",
  message: "Invalid Email or Password!",
};

router.post("/login", async (req, res) => {
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

    const token = createJSONToken(user.username);
    return res.status(200).json({ token: token, userID: user.id });
  } catch (error) {
    console.log(error.message);
    return res.status(422).json({ error: invalidAuthenticationError });
  }
});

module.exports = router;
