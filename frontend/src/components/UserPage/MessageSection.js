import React from "react";
import { useSelector } from "react-redux";

const MessageSection = () => {
  const messages = useSelector((state) => state.current.shownConversation);

  return (
    <div
      style={{
        background: "aliceblue",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {messages ? (
        Object.keys(messages).map((key) => {
          return (
            <div key={key}>
              {messages[key].sender}({messages[key].date}) :{" "}
              {messages[key].text}
            </div>
          );
        })
      ) : (
        <p>No messages</p>
      )}
    </div>
  );
};

export default MessageSection;
