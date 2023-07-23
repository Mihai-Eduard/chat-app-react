import React from "react";
import classes from "./MessageBubble.module.css";
import profileDefault from "../../resources/UserPage/profile-picture-default.png";

const fromMilliToTime = (timeInMilli) => {
  const dateObject = new Date(timeInMilli);

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};

const MessageBubble = ({
  friendUsername,
  friendPicture,
  text,
  date,
  isUserTheSender,
  isTheFirstMessage,
}) => {
  return (
    <div
      style={{ flexDirection: isUserTheSender ? "row-reverse" : "row" }}
      className={classes.mainContainer}
    >
      {!isUserTheSender && isTheFirstMessage && (
        <img
          src={friendPicture === "null" ? profileDefault : friendPicture}
          alt="profile"
        />
      )}
      <div
        className={classes.messageBubble}
        style={{
          backgroundColor: !isUserTheSender ? "white" : "#DCF8C6",
          marginLeft: isTheFirstMessage ? "0.3rem" : "4rem",
        }}
      >
        {!isUserTheSender && isTheFirstMessage && (
          <p className={classes.sender}>~{friendUsername}~</p>
        )}
        <p>{text}</p>
        <p className={classes.date}>{fromMilliToTime(date)}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
