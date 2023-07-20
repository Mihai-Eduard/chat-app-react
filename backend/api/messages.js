const { admin } = require("./admin");
const { getUser } = require("./users");

const addMessage = async (username, { friend, text, sender }) => {
  try {
    const { userKey, user } = await getUser({ username: username });
    if (!userKey) return null;

    let conversationKey = null;

    if (user["conversations"]) {
      conversationKey = Object.keys(user["conversations"]).find(
        (key) => user["conversations"][key].friend === friend,
      );
    }

    if (!conversationKey) {
      const addConversationResponse = await admin
        .database()
        .ref("/users/" + userKey + "/conversations")
        .push({
          friend: friend,
        });
      conversationKey = addConversationResponse["getKey"]();
    }

    if (!conversationKey) return null;

    if (text === null) return true;

    const addMessageResponse = await admin
      .database()
      .ref(
        "/users/" + userKey + "/conversations/" + conversationKey + "/messages",
      )
      .push({
        text: text,
        sender: sender,
        date: Date.now(),
      });
    const messageKey = addMessageResponse["getKey"]();
    if (!messageKey) return null;
    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getConversations = async (username) => {
  try {
    const { user } = await getUser({ username: username });
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
