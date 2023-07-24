import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../../utils/token";
import { json } from "react-router-dom";

const ManageConnections = () => {
  const friendRequests = useSelector((state) => state.current.friendRequests);
  const [friendID, setFriendID] = useState("");

  console.log(friendRequests);

  const sendRequest = () => {
    fetch("http://localhost:8080/user/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ friendID: friendID }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        throw json(
          { message: "Could not authenticate the user!" },
          { status: 500 },
        );
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <label htmlFor="username">Send friend request:</label>
        <div>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Friend ID"
            onChange={(event) => {
              setFriendID(event.target.value);
            }}
            value={friendID}
          />
          <button onClick={sendRequest}>Send</button>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="username">Friend Requests:</label>
        {friendRequests &&
          Object.keys(friendRequests).map((key) => {
            return <p key={key}>{friendRequests[key].id}</p>;
          })}
        {!friendRequests && <p>No friend requests available...</p>}
      </div>
    </div>
  );
};

export default ManageConnections;
