const { admin } = require("./admin");
const { getUser } = require("./users");

const addMessage = async (userID, { friendID, text, senderID }) => {
  try {
    const { userKey: userKey1, user: user1 } = await getUser({ id: userID });
    const { userKey: userKey2, user: user2 } = await getUser({ id: friendID });
    if (!userKey1 || !userKey2) return null;

    let conversationKey1 = null;
    let conversationKey2 = null;

    if (user1["conversations"]) {
      conversationKey1 = Object.keys(user1["conversations"]).find(
        (key) => user1["conversations"][key].friendID === friendID,
      );
    }
    if (user2["conversations"]) {
      conversationKey2 = Object.keys(user2["conversations"]).find(
        (key) => user2["conversations"][key].friendID === userID,
      );
    }

    if (!conversationKey1) {
      const addConversationResponse = await admin
        .database()
        .ref("/users/" + userKey1 + "/conversations")
        .push({
          friendUsername: user2.username,
          friendID: user2.id,
          friendPicture: user2.picture,
        });
      conversationKey1 = addConversationResponse["getKey"]();
    }
    if (!conversationKey2) {
      const addConversationResponse = await admin
        .database()
        .ref("/users/" + userKey2 + "/conversations")
        .push({
          friendUsername: user1.username,
          friendID: user1.id,
          friendPicture: user1.picture,
        });
      conversationKey2 = addConversationResponse["getKey"]();
    }

    if (!conversationKey1 || !conversationKey2) return null;

    if (text === null) return true;

    const date = Date.now();
    const addMessageResponse1 = await admin
      .database()
      .ref(
        "/users/" +
          userKey1 +
          "/conversations/" +
          conversationKey1 +
          "/messages",
      )
      .push({
        text: text,
        senderID: senderID,
        date: date,
      });
    const addMessageResponse2 = await admin
      .database()
      .ref(
        "/users/" +
          userKey2 +
          "/conversations/" +
          conversationKey2 +
          "/messages",
      )
      .push({
        text: text,
        senderID: senderID,
        date: date,
      });
    const messageKey1 = addMessageResponse1["getKey"]();
    const messageKey2 = addMessageResponse2["getKey"]();
    if (!messageKey1 || !messageKey2) return null;
    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getConversations = async (id) => {
  try {
    const { user } = await getUser({ id: id });
    if (!user) return null;
    if (!user["conversations"]) return {};

    return user["conversations"];
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.addMessage = addMessage;
exports.getConversations = getConversations;
