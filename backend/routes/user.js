const express = require("express");
const { checkAuthMiddleware } = require("../utils/auth");
const { getUser } = require("../api/users");
const { admin, bucket } = require("../api/admin");
const { v4: uuidv4 } = require("uuid");
const { addMessage } = require("../api/messages");

const router = express.Router();

router.use(checkAuthMiddleware);

router.get("/", async (req, res) => {
  const { user } = await getUser({ id: req["id"] });
  if (!user) {
    return res
      .status(401)
      .json({ message: "Not authorized to get conversations." });
  }
  return res.status(200).json({ user: user });
});

router.post("/change", async (req, res) => {
  try {
    const userID = req["id"];
    const { userKey } = await getUser({ id: userID });
    const usersRaw = (await admin.database().ref("/users").get()).val();

    const username = req.body.username;
    let accessLink = null;
    if (req.body.picture === "null") accessLink = "null";
    if (req.body.picture !== "null" && req.body.picture !== "same") {
      const base64Image = req.body.picture.split(";base64,").pop();
      const binaryData = Buffer.from(base64Image, "base64");

      const accessToken = uuidv4(undefined, undefined, undefined);
      await bucket.file(`images/${userID}.jpg`).save(binaryData, {
        metadata: {
          metadata: {
            firebaseStorageDownloadTokens: accessToken,
          },
        },
      });
      accessLink = `https://firebasestorage.googleapis.com/v0/b/discord-app-6ae8f.appspot.com/o/images%2F${userID}.jpg?alt=media&token=${accessToken}`;
    }

    await admin.database().ref(`users/${userKey}/username`).set(username);
    if (accessLink)
      await admin.database().ref(`users/${userKey}/picture`).set(accessLink);

    const usersRawKeys = Object.keys(usersRaw);
    for (let friendKey of usersRawKeys) {
      if (!usersRaw[friendKey].conversations) continue;
      const conversationsKeys = Object.keys(usersRaw[friendKey].conversations);
      for (let conversationKey of conversationsKeys) {
        if (
          usersRaw[friendKey].conversations[conversationKey].friendID === userID
        ) {
          await admin
            .database()
            .ref(
              `users/${friendKey}/conversations/${conversationKey}/friendUsername`,
            )
            .set(username);
          if (accessLink)
            await admin
              .database()
              .ref(
                `users/${friendKey}/conversations/${conversationKey}/friendPicture`,
              )
              .set(accessLink);
        }
      }
    }

    console.log(`successfully changed the user ${userID} details...`);
    return res.status(200).json({ status: "accepted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: {
        title: "Invalid action!",
        message: "Could not change the picture!",
      },
    });
  }
});

router.post("/request", async (req, res) => {
  try {
    const userID = req["id"];
    const friendID = req.body["friendID"];
    if (userID === friendID)
      return res.status(422).json({ error: "This is you own ID!" });

    const { userKey: friendKey, user: friend } = await getUser({
      id: friendID,
    });
    if (!friendID || !friend)
      return res.status(422).json({ error: "This ID doesn't exist!" });

    if (friend["conversations"]) {
      const index = Object.keys(friend["conversations"]).findIndex(
        (key) => friend["conversations"][key].friendID === userID,
      );
      if (index !== -1)
        return res.status(422).json({ error: "This is already your friend!" });
    }

    if (!friend["friendRequests"]) {
      await admin
        .database()
        .ref(`/users/${friendKey}/friendRequests`)
        .push({ friendID: userID });
      return res.status(200).json({ status: "accepted" });
    }
    const index = Object.keys(friend["friendRequests"]).findIndex(
      (key) => friend["friendRequests"][key].friendID === userID,
    );
    if (index === -1) {
      await admin
        .database()
        .ref(`/users/${friendKey}/friendRequests`)
        .push({ friendID: userID });
    }
    return res.status(200).json({ status: "accepted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: {
        title: "Invalid action!",
        message: "Could not change the picture!",
      },
    });
  }
});

router.post("/response", async (req, res) => {
  try {
    const userID = req["id"];
    const friendID = req.body["friendID"];
    const accept = req.body["accept"];

    const { userKey, user } = await getUser({ id: userID });

    if (user["friendRequests"]) {
      const index = Object.keys(user["friendRequests"]).findIndex(
        (key) => user["friendRequests"][key].friendID === friendID,
      );
      if (index !== -1) {
        const friendRequestKey = Object.keys(user["friendRequests"])[index];
        await admin
          .database()
          .ref(`users/${userKey}/friendRequests/${friendRequestKey}`)
          .set(null);
      }
    }

    if (accept) {
      await addMessage(userID, { friendID, text: null, senderID: null });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: {
        title: "Invalid action!",
        message: "Could not change the picture!",
      },
    });
  }
});

module.exports = router;
