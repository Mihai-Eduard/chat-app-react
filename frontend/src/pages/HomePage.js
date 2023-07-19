import React, { Fragment } from "react";
import MainNavigationBar from "../components/MainNavigationBar";
import Features from "../components/MainPage/Features";
import Description from "../components/MainPage/Description";
import About from "../components/MainPage/About";

const HomePage = () => {
  return (
    <Fragment>
      <MainNavigationBar />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            background: "pink",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Description />
        </div>
        <div
          style={{
            alignSelf: "center",
            background: "pink",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Description />
        </div>
        <div
          style={{
            alignSelf: "center",
            background: "pink",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Description />
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
