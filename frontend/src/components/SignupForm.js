import React, { useRef, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import Modal from "../ui/Modal";
import { saveToken } from "../utils/token";

const handleError = (error) => {
  console.log(error);
  throw json({ message: "Could not authenticate the user!" }, { status: 500 });
};

const SignupForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setError("Confirm password is not correct!");
      return;
    }
    setIsSubmitting(true);
    setError(null);
    const req = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      username: usernameRef.current.value,
    };
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 422)
          response.json().then((data) => {
            setError(data.error);
            setIsSubmitting(false);
          });
        else if (response.status === 500) handleError();
        else if (response.status === 200) {
          response.json().then((data) => {
            saveToken(data.token);
            return navigate("/");
          });
        }
      })
      .catch(handleError);
  };

  const form = (
    <form onSubmit={submitFormHandler} noValidate>
      <div className="row mb-3">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control bg-dark bg-opacity-50 text-white"
            id="email"
            name="email"
            placeholder="ediVoinecu'@gmail.com"
            ref={emailRef}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="username" className="col-sm-2 col-form-label">
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control bg-dark bg-opacity-50 text-white"
            placeholder="John2oe"
            aria-label="Username"
            id="username"
            name="username"
            ref={usernameRef}
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
            name="password"
            ref={passwordRef}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="confirm-password" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control bg-dark bg-opacity-50 text-white"
            id="confirm-password"
            name="confirm-password"
            ref={confirmPasswordRef}
          />
        </div>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button
          type="submit"
          className="btn btn-outline-primary"
          disabled={isSubmitting}
        >
          {!isSubmitting ? "Sign up" : "Signing up..."}
        </button>
        <Link to="/home/login">
          <button
            type="submit"
            className="btn btn-outline-light"
            style={{ marginRight: "1rem" }}
            disabled={isSubmitting}
          >
            Sign in instead
          </button>
        </Link>
      </div>
    </form>
  );

  return (
    <Modal
      title={{ message: "Create a new account!", closePath: "/home" }}
      body={form}
    />
  );
};

export default SignupForm;
