import React from "react";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";

const LoginForm = () => {
  const form = (
    <form>
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="email" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="password" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2" style={{ marginLeft: "0px" }}>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="checkbox" />
            <label className="form-check-label" htmlFor="checkbox">
              Remember me
            </label>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
        <Link to="/signup">
          <button type="submit" className="btn">
            Create account
          </button>
        </Link>
      </div>
    </form>
  );

  return (
    <Modal title={{ message: "Welcome back!", closePath: "/" }} body={form} />
  );
};

export default LoginForm;
