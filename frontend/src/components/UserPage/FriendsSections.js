import React, { useState } from "react";
import ChatBox from "./ChatBox";
import { useSelector } from "react-redux";

const FriendsSections = () => {
  const conversations = useSelector((state) => state.current.conversations);

  return (
    <div style={{ borderBottom: "0.05rem solid rgb(174 174 174 / 50%)" }}>
      {Object.keys(conversations).map((key) => (
        <ChatBox
          key={key}
          username={conversations[key].friend}
          messages={conversations[key].messages}
        />
      ))}
    </div>
  );
};

export default FriendsSections;
