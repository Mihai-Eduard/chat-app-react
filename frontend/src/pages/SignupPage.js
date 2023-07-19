import React from "react";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  const formContainerStyle = {
    backgroundColor: "black",
  };
  return (
    <main>
      <div style={formContainerStyle}>
        <SignupForm />
      </div>
    </main>
  );
};

export default SignupPage;
