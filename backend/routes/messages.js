const express = require("express");
const { checkAuthMiddleware } = require("../utils/auth");
const { addMessage } = require("../api/messages");

const router = express.Router();

router.use(checkAuthMiddleware);

router.post("/", async (req, res) => {
  console.log("posting the message...");
  const userID = req.body["userID"];
  const friendID = req.body["friendID"];
  const senderID = req.body["senderID"];
  const text = req.body["text"];
  const response = await addMessage(userID, {
    friendID: friendID,
    text: text,
    senderID: senderID,
  });
  if (response) return res.status(200).json({ status: "added" });
  return res.status(500).json({
    error: {
      title: "Invalid action!",
      message: "Could not add the message!",
    },
  });
});

module.exports = router;
