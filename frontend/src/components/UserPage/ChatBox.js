import React from "react";
import classes from "./ChatBox.module.css";
import profileDefault from "../../resources/UserPage/profile-default.png";

const ChatBox = ({ username, messages }) => {
  let text = null;
  let date = null;

  if (messages) {
    const keys = Object.keys(messages);
    if (keys.length > 0) {
      text = messages[keys[keys.length - 1]].text;
      date = messages[keys[keys.length - 1]].date;
    }
  }

  const showMessagesHandler = () => {
    console.log(messages);
  };

  return (
    <div className={classes.mainContainer} onClick={showMessagesHandler}>
      <div className={classes.imageContainer}>
        <img src={profileDefault} alt="profile" />
      </div>
      <div className={classes.detailsContainer}>
        <h5>{username || "Username"}</h5>
        <div className={classes.messageContainer}>
          <div className={classes.textContainer}>
            {text || "Start the conversation"}
          </div>
          <div className={classes.dateContainer}>{date ? date : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
