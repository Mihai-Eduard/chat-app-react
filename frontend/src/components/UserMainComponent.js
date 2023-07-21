import React from "react";
import ConnectionsSections from "./UserPage/ConnectionsSections";
import MessageSection from "./UserPage/MessageSection";

const UserMainComponent = () => {
  return (
    <main style={{ display: "flex", height: "100vh" }}>
      <ConnectionsSections />
      <MessageSection />
    </main>
  );
};

export default UserMainComponent;
