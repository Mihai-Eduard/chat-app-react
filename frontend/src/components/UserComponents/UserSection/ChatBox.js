import React from "react";
import classes from "./ChatBox.module.css";
import profileDefault from "../../../resources/UserPage/profile-picture-default.png";
import { useDispatch, useSelector } from "react-redux";
import { currentActions } from "../../../store/current-slice";

const fromMilliToTime = (timeInMilli) => {
  const dateObject = new Date(timeInMilli);

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

const ChatBox = ({
  friendUsername,
  conversation,
  conversationKey,
  picture,
}) => {
  const user = useSelector((state) => state.current.user);
  const messages = conversation["messages"];
  const dispatch = useDispatch();
  let text = null;
  let date = null;
  let senderID = null;

  if (messages) {
    const keys = Object.keys(messages);
    if (keys.length > 0) {
      text = messages[keys[keys.length - 1]].text;
      date = messages[keys[keys.length - 1]].date;
      senderID = messages[keys[keys.length - 1]]["senderID"];
    }
  }

  const showMessagesHandler = () => {
    dispatch(
      currentActions.setShownConversation({
        shownConversation: conversationKey,
      }),
    );
  };

  return (
    <div className={classes.mainContainer} onClick={showMessagesHandler}>
      <div className={classes.imageContainer}>
        <img
          src={picture === "null" ? profileDefault : picture}
          alt="profile"
        />
      </div>
      <div className={classes.detailsContainer}>
        <h5>{friendUsername || "Username"}</h5>
        <div className={classes.messageContainer}>
          <div className={classes.textContainer}>
            {conversation["messages"]
              ? `${
                  senderID === user.id ? user.username : friendUsername
                }: ${text}`
              : "Start the conversation"}
          </div>
          <div className={classes.dateContainer}>
            {date ? fromMilliToTime(date) : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
