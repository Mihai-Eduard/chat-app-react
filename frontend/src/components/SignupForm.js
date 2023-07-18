import React from "react";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";

const SignupForm = () => {
  const form = (
    <form>
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control bg-dark bg-opacity-50 text-white"
            id="email"
            placeholder="ediVoinecu'@gmail.com"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="text" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control bg-dark bg-opacity-50 text-white"
            placeholder="John2oe"
            aria-label="Username"
            id="username"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control bg-dark bg-opacity-50 text-white"
            id="password"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control bg-dark bg-opacity-50 text-white"
            id="passwordConfirm"
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button type="submit" className="btn btn-outline-primary">
          Sign up
        </button>
        <Link to="/login">
          <button
            type="submit"
            className="btn btn-outline-light"
            style={{ marginRight: "1rem" }}
          >
            Sign in instead
          </button>
        </Link>
      </div>
    </form>
  );

  return (
    <Modal title={{ message: "Create Account", closePath: "/" }} body={form} />
  );
};

export default SignupForm;
