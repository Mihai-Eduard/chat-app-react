import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../../utils/token";
import { json } from "react-router-dom";
import FriendRequest from "./FriendRequest";

const handleError = (error) => {
  console.log(error);
  throw json({ message: "Could not authenticate the user!" }, { status: 500 });
};

const ManageConnections = () => {
  const friendRequests = useSelector((state) => state.current.friendRequests);
  const [friendID, setFriendID] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
        if (response.status === 500) handleError("A server error has occurred");
        else if (response.status === 422) {
          response.json().then((data) => {
            setError(data.error);
          });
        } else if (response.status === 200) {
          setError(null);
          setSuccess("Request successfully sent!");
        }
      })
      .catch(handleError);
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </div>
      <div style={{ marginTop: "1rem", overflowY: "auto" }}>
        <label htmlFor="username">Friend Requests:</label>
        {friendRequests &&
          Object.keys(friendRequests).map((key) => {
            return (
              <FriendRequest
                key={key}
                friendID={friendRequests[key].friendID}
              />
            );
          })}
        {!friendRequests && <p>No friend requests available...</p>}
      </div>
    </div>
  );
};

export default ManageConnections;
