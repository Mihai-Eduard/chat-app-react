import React from "react";
import Button from "@mui/material/Button";
import { getToken } from "../../../utils/token";

const FriendRequest = ({ friendID }) => {
  const respondToFriendRequest = (accept) => {
    fetch("http://localhost:8080/user/response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ friendID: friendID, accept: accept }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ display: "flex", marginTop: "1rem" }}>
      <p
        style={{
          alignSelf: "center",
          textOverflow: "ellipsis",
          maxWidth: "50%",
          wordWrap: "break-word",
          marginBottom: "0",
        }}
      >
        {friendID}
      </p>
      <Button
        variant="contained"
        color="success"
        style={{
          width: "5rem",
          height: "3rem",
          marginLeft: "1rem",
          alignSelf: "center",
        }}
        onClick={() => respondToFriendRequest(true)}
      >
        Accept
      </Button>
      <Button
        variant="outlined"
        color="error"
        style={{
          width: "5rem",
          height: "3rem",
          marginLeft: "1rem",
          alignSelf: "center",
        }}
        onClick={() => respondToFriendRequest(false)}
      >
        Decline
      </Button>
    </div>
  );
};

export default FriendRequest;
