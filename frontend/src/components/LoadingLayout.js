import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingLayout = () => {
  return (
    <div
      style={{
        background: "aliceblue",
        display: "flex",
        height: "100vh",
        justifyContent: "space-around",
      }}
    >
      <div style={{ alignSelf: "center" }}>
        <Spinner style={{ margin: "0.5rem" }} animation="grow" variant="dark" />
        <Spinner style={{ margin: "0.5rem" }} animation="grow" variant="dark" />
        <Spinner style={{ margin: "0.5rem" }} animation="grow" variant="dark" />
      </div>
    </div>
  );
};

export default LoadingLayout;
