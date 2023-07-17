import React from "react";
import { Link } from "react-router-dom";

import classes from "./Modal.module.css";

const Modal = ({ title, body, footer }) => {
  return (
    <div className="modal" style={{ display: "inline" }} tabIndex="-1">
      <div className={"modal-dialog " + classes.container}>
        <div className="modal-content">
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
