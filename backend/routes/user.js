const express = require("express");
const { checkAuthMiddleware } = require("../utils/auth");
const { getConversations } = require("../api/messages");

const router = express.Router();

router.use(checkAuthMiddleware);

router.get("/verify", (req, res) => {
  console.log("verify route reached...");
  return res
    .status(200)
    .json({ status: "accepted", username: req["username"] });
});

router.get("/conversations", async (req, res) => {
  console.log("conversation route reached...");
  const conversations = await getConversations(req["username"]);
  if (conversations === null)
    return res
      .status(401)
      .json({ message: "Not authorized to get conversations." });
  return res.status(200).json({ conversations: conversations });
});

module.exports = router;
