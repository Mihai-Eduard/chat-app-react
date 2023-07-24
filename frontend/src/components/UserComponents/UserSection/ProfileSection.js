import React, { useCallback, useState } from "react";
import profileDefault from "../../../resources/UserPage/profile-picture-default.png";
import classes from "./ProfileSection.module.css";
import { useSelector } from "react-redux";
import OptionsOverlay from "./OptionsOverlay";

const ProfileSection = () => {
  const user = useSelector((state) => state.current.user);
  const [overlay, setOverlay] = useState(false);

  const closeOverlay = useCallback(() => {
    setOverlay(false);
  }, []);

  const settingsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
      onClick={() => {
        setOverlay(true);
      }}
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      ></path>
    </svg>
  );

  return (
    <div className={classes.mainContainer} style={{}}>
      {overlay && <OptionsOverlay closeOverlay={closeOverlay} />}
      <div className={classes.imageContainer}>
        <img
          src={user.picture === "null" ? profileDefault : user.picture}
          alt="profile"
        />
      </div>
      <div className={classes.detailsContainer}>
        <h5>{user.username || "Username"}</h5>
      </div>
      <div className={classes.settingsContainer}>{settingsIcon}</div>
    </div>
  );
};

export default ProfileSection;
