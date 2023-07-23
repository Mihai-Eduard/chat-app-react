const express = require("express");
const { checkAuthMiddleware } = require("../utils/auth");
const { getUser } = require("../api/users");

const router = express.Router();

router.use(checkAuthMiddleware);

router.get("/", async (req, res) => {
  const { user } = await getUser({ id: req["id"] });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Not authorized to get conversations." });
  }
  console.log(`returning entire user ${req["id"]}...`);
  return res.status(200).json({ user: user });
});

module.exports = router;
