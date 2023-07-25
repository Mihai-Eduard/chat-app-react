import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./AccountSettings.module.css";
import defaultPicture from "../../../resources/UserPage/profile-picture-default.png";
import { getToken } from "../../../utils/token";
import { json, useNavigate } from "react-router-dom";

const AccountSettings = ({ closeOverlay }) => {
  const user = useSelector((state) => state.current.user);
  const [picture, setPicture] = useState(user.picture);
  const [username, setUsername] = useState(user.username);
  const fileRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const selectPictureHandler = (event) => {
    const file = event.target.files[0];
    if (file.size > 1000 * 1000) {
      setError("The picture should not exceed 1MB.");
      fileRef.current.value = "";
      return;
    }

    setError(null);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPicture(reader.result);
    };
    if (file) reader.readAsDataURL(file);
  };

  const setUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const saveChangesHandler = () => {
    if (error === "The picture should not exceed 1MB.") return;
    if (username.trim().length === 0) {
      setError("The username cannot be an empty string.");
      return;
    }
    if (username.trim().length > 10) {
      setError("The username cannot exceed 10 characters.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const changes = {
      username: username.trim(),
      picture: picture === user.picture ? "same" : picture,
    };

    console.log(changes);
    fetch("http://localhost:8080/user/change", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(changes),
    }).then((response) => {
      console.log(response);
      if (response.status === 500)
        throw json(
          { message: "Could not authenticate the user!" },
          { status: 500 },
        );
      if (response.status === 401) return navigate("/home");
      setIsSubmitting(false);
    });
  };

  return (
    <div className={classes.mainContainer}>
      <div>
        <p>{`User ID: ${user.id}`}</p>
      </div>
      <div className={classes.selectPictureContainer}>
        <img
          src={picture !== "null" ? picture.toString() : defaultPicture}
          alt="profile"
        />
        <div>
          <label htmlFor="picture">Change profile picture:</label>
          <input
            id="picture"
            name="picture"
            type="file"
            accept="image/*"
            onChange={selectPictureHandler}
            ref={fileRef}
          />
          <button
            onClick={() => {
              setPicture("null");
              fileRef.current.value = "";
            }}
          >
            Choose default picture
          </button>
        </div>
      </div>
      <div className={classes.selectUsernameContainer}>
        <label htmlFor="username">Change username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username.toString()}
          onChange={setUsernameHandler}
        />
      </div>
      <div className={classes.errorContainer}>{error && <p>{error}</p>}</div>
      <div className={classes.buttonsContainer}>
        <button
          type="submit"
          className="btn btn-outline-primary"
          disabled={isSubmitting}
          onClick={saveChangesHandler}
        >
          {!isSubmitting ? "Save" : "Saving..."}
        </button>
        <button
          type="submit"
          className="btn btn-outline-light"
          style={{ marginRight: "1rem" }}
          onClick={closeOverlay}
          disabled={isSubmitting}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default React.memo(AccountSettings);
