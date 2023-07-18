import React from "react";
import { Link } from "react-router-dom";

import classes from "./Modal.module.css";

const Modal = ({ title, body, footer }) => {
  const formStyle = {
    background: "#1d0a66",
    color: "#efedf5",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
  };

  return (
    <div
      className="modal"
      style={{ display: "inline", background: "#36393F" }}
      tabIndex="-1"
    >
      <div className={"modal-dialog " + classes.container}>
        <div className="modal-content" style={formStyle}>
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title.message}</h5>
              <Link to={title.closePath}>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </Link>
            </div>
          )}
          {body && <div className="modal-body">{body}</div>}
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
