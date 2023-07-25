import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>{`status: ${error.status ? error.status : 500}`}</p>
      <p>{`message: ${
        error.data ? error.data.message : "Server error occurred!"
      }`}</p>
    </div>
  );
};

export default ErrorPage;
