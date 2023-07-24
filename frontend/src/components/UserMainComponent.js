import React from "react";
import UserSection from "./UserComponents/UserSection/UserSection";
import MessageSection from "./UserComponents/MessageSection/MessageSection";

const UserMainComponent = () => {
  return (
    <main style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <UserSection />
      <MessageSection />
    </main>
  );
};

export default UserMainComponent;
