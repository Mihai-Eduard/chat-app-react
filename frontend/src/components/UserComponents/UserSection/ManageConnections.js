import React from "react";

const ManageConnections = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor="username">Send friend request</label>
      <div>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="username"
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ManageConnections;
