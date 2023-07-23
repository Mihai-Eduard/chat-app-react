import React, { useState } from "react";
import classes from "./SendMessageForm.module.css";

const SendMessageForm = ({ sendMessageHandler }) => {
  const [currentText, setCurrentText] = useState("");

  const changeInputHandler = (event) => {
    setCurrentText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    sendMessageHandler(currentText);
    setCurrentText("");
  };

  return (
    <form className={classes.mainContainer} onSubmit={submitHandler}>
      <textarea value={currentText} onChange={changeInputHandler} />
      <button>Send</button>
    </form>
  );
};

export default SendMessageForm;
