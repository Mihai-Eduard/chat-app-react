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
            background: "#09000f",
            display: "flex",
            justifyContent: "space-around",
              width:"100%",
          }}
        >
          <Description />
        </div>
          <div style={{width:"100%"}}>
              <Features/>
          </div>
      </main>
    </Fragment>
  );
};

export default HomePage;
