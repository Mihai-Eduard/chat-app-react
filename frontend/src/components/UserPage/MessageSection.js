import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../utils/token";

const defaultMessage = (
  <div
    style={{
      background: "aliceblue",
      flexGrow: "1",
      display: "flex",
      justifyContent: "space-around",
    }}
  >
    <h3 style={{ alignSelf: "center" }}>Start Chatting with your friends!</h3>
  </div>
);

const MessageSection = () => {
  const username = useSelector((state) => state.current.username);
  const conversations = useSelector((state) => state.current.conversations);
  const shownConversation = useSelector(
    (state) => state.current.shownConversation,
  );
  const [currentText, setCurrentText] = useState("");

  if (!shownConversation) return <>{defaultMessage}</>;
  const conversation = conversations[shownConversation];

  const messages = conversation["messages"] ? conversation["messages"] : {};

  const sendMessageHandler = (event) => {
    event.preventDefault();
    const text = currentText;
    setCurrentText("");

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
      });
  };

  return (
    <div
      style={{
        background: "aliceblue",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flexGrow: 1, overflowY: "scroll" }}>
        {Object.keys(messages).map((key) => {
          return (
            <div key={key}>
              {messages[key].sender}({messages[key].date}) :{" "}
              {messages[key].text}
            </div>
          );
        })}
      </div>
      <div>
        <form
          style={{ width: "100%", display: "flex", padding: "3rem" }}
          onSubmit={sendMessageHandler}
        >
          <textarea
            style={{ flexGrow: 1, resize: "none" }}
            value={currentText}
            onChange={(event) => {
              setCurrentText(event.target.value);
            }}
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default MessageSection;
