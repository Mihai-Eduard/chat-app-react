import React, { Fragment } from "react";
import MainNavigationBar from "../components/HomeComponents/MainNavigationBar";
import Technologies from "../components/HomeComponents/Technologies";
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
            background: "#212539",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            width: "100%",
          }}
          id="technologies"
        >
          <h5
            style={{ color: "white", marginTop: "3rem", alignSelf: "center" }}
          >
            Join us to get started!
          </h5>
          <Description />
        </div>
        <div style={{ width: "100%" }} id="features">
          <Technologies />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
