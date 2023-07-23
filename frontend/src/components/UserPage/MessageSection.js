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
  const username = useSelector((state) => state.current.username);
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
        username: username,
        text: text,
        sender: username,
        friend: conversation["friend"],
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
              sender={messages[key].sender}
              text={messages[key].text}
              date={messages[key].date}
              isUserTheSender={username === messages[key].sender}
              isTheFirstMessage={
                index === 0 ||
                messages[key].sender !==
                  messages[messagesKeyList[index - 1]].sender
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
