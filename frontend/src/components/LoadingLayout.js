import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingLayout = (props) => {
  return (
    <div>
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
};

export default LoadingLayout;
