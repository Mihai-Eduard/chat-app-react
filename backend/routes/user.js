const express = require("express");
const { checkAuthMiddleware } = require("../utils/auth");

const router = express.Router();

router.use(checkAuthMiddleware);

router.get("/verify", (req, res) => {
  console.log("reaching...");
  return res.status(200).json({ status: "accepted" });
});

module.exports = router;
