import React, { useRef } from "react";
import { Link, useFetcher } from "react-router-dom";
import Modal from "../ui/Modal";

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberMeRef = useRef(null);
  const fetcher = useFetcher();

  const actionData = fetcher.data;
  const navigation = fetcher.state;
  const isSubmitting = navigation === "submitting";

  const submitFormHandler = (event) => {
    event.preventDefault();
    fetcher.submit(
      { email: emailRef.current.value, password: passwordRef.current.value },
      { method: "post", action: "/home/login" },
    );
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
            placeholder="example@gmail.com"
            ref={emailRef}
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
            ref={passwordRef}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-2" style={{ marginLeft: "0px" }}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox"
              ref={rememberMeRef}
            />
            <label className="form-check-label" htmlFor="checkbox">
              Remember me
            </label>
          </div>
          {actionData && actionData.error && !isSubmitting && (
            <p style={{ color: "red", marginTop: "1rem" }}>
              {actionData.error.message}
            </p>
          )}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button
          type="submit"
          className="btn btn-outline-primary "
          disabled={isSubmitting}
        >
          {!isSubmitting ? "Sign in" : "Signing in..."}
        </button>
        <Link to="/home/signup">
          <button
            type="submit"
            className="btn btn-outline-light"
            style={{ marginRight: "1rem" }}
          >
            Create account instead
          </button>
        </Link>
      </div>
    </form>
  );

  return (
    <Modal
      title={{ message: "Welcome back!", closePath: "/home" }}
      body={form}
    />
  );
};

export default LoginForm;
