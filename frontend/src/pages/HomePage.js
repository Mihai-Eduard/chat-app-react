import React, { Fragment } from "react";
import MainNavigationBar from "../components/HomeComponents/MainNavigationBar";
import Features from "../components/HomeComponents/Features";
import Description from "../components/HomeComponents/Description";
import About from "../components/HomeComponents/About";

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
            background: "#09000f",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Description />
        </div>
        <div style={{ width: "100%" }}>
          <Features />
        </div>
        <div>
          <About />
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
