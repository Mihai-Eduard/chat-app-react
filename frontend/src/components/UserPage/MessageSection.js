import React from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../utils/token";
import classes from "./MessageSection.module.css";
import SendMessageForm from "./SendMessageForm";
import MessageBubble from "./MessageBubble";
import { json } from "react-router-dom";

const defaultMessage = (
  <div className={classes.defaultMessageSection}>
    <h3>Start Chatting with your friends!</h3>
  </div>
);

const MessageSection = () => {
  const user = useSelector((state) => state.current.user);
  const conversations = useSelector((state) => state.current.conversations);
  const shownConversation = useSelector(
    (state) => state.current.shownConversation,
  );

  if (!shownConversation) return <>{defaultMessage}</>;

  const conversation = conversations[shownConversation];
  const messages = conversation["messages"] ? conversation["messages"] : {};
  const messagesKeyList = Object.keys(messages);

  const sendMessageHandler = (text) => {
    fetch("http://localhost:8080/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({
        userID: user["id"],
        text: text,
        senderID: user["id"],
        friendID: conversation["friendID"],
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        throw json({ message: "Could not send the message!" }, { status: 500 });
      });
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.textContainer}>
        {messagesKeyList.map((key, index) => {
          return (
            <MessageBubble
              key={key}
              friendUsername={conversation["friendUsername"]}
              friendPicture={conversation["friendPicture"]}
              text={messages[key].text}
              date={messages[key].date}
              isUserTheSender={user.id === messages[key].senderID}
              isTheFirstMessage={
                index === 0 ||
                messages[key].senderID !==
                  messages[messagesKeyList[index - 1]].senderID
              }
            />
          );
        })}
      </div>
      <SendMessageForm sendMessageHandler={sendMessageHandler} />
    </div>
  );
};

export default MessageSection;
