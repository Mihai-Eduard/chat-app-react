const express = require("express");
const { checkAuthMiddleware } = require("../utils/auth");
const { addMessage } = require("../api/messages");

const router = express.Router();

router.use(checkAuthMiddleware);

router.post("/", async (req, res) => {
  console.log("posting the message...");
  const username = req.body["username"];
  const friend = req.body["friend"];
  const sender = req.body["sender"];
  const text = req.body["text"];
  const response = await addMessage(username, {
    friend: friend,
    text: text,
    sender: sender,
  });
  if (response) return res.status(200).json({ status: "added" });
  return res.status(422).json({
    error: {
      title: "Invalid action!",
      message: "Could not add the message!",
    },
  });
});

module.exports = router;
