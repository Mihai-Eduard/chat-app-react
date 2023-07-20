import React from "react";
import ProfileSection from "./ProfileSection";
import FriendsSections from "./FriendsSections";

const ConnectionsSections = ({ username, conversations }) => {
  return (
    <div style={{ flex: "0 0 30%", overflowY: "scroll", minWidth: "15rem" }}>
      <ProfileSection username={username} />
      <FriendsSections conversations={conversations} />
    </div>
  );
};

export default ConnectionsSections;
