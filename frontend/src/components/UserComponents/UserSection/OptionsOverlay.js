import classes from "./OptionsOverlay.module.css";
import React, { useState } from "react";
import ReactDom from "react-dom";
import AccountDetails from "./AccountSettings";
import ManageConnections from "./ManageConnections";

const Options = ({ closeOverlay }) => {
  const [options, setOptions] = useState(1);

  const formStyle = {
    background: "#1d0a66",
    color: "#efedf5",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
  };

  const modal = (
    <div className="modal" style={{ display: "inline" }} tabIndex="-1">
      <div className={"modal-dialog " + classes.container}>
        <div className="modal-content" style={formStyle}>
          <div className="modal-header">
            <button
              className={classes.button}
              onClick={() => {
                setOptions(1);
              }}
            >
              {"Account Settings"}
            </button>
            <p style={{ marginBottom: "0.3rem" }}>|</p>
            <button
              className={classes.button}
              onClick={() => {
                setOptions(2);
              }}
            >
              {"Manage Connections"}
            </button>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeOverlay}
            ></button>
          </div>
          <div className="modal-body">
            {options === 1 && <AccountDetails closeOverlay={closeOverlay} />}
            {options === 2 && <ManageConnections />}
          </div>
        </div>
      </div>
    </div>
  );

  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDom.createPortal(
        <div className={classes.overlay}></div>,
        portalElement,
      )}
      {ReactDom.createPortal(modal, portalElement)}
    </>
  );
};

export default Options;
