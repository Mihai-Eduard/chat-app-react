import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <p>{`status: ${error.status}`}</p>
      <p>{`message: ${error.data.message}`}</p>
    </div>
  );
};

export default ErrorPage;
