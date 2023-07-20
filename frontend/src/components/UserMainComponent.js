import React from "react";
import ConnectionsSections from "./UserPage/ConnectionsSections";
import MessageSection from "./UserPage/MessageSection";

const UserMainComponent = ({ username, conversations }) => {
  return (
    <main style={{ display: "flex", height: "100vh" }}>
      <ConnectionsSections username={username} conversations={conversations} />
      <MessageSection />
    </main>
  );
};

export default UserMainComponent;
