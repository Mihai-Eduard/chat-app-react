import React, { Fragment } from "react";
import MainNavigationBar from "../components/MainNavigationBar";
import Features from "../components/MainPage/Features";
import Description from "../components/MainPage/Description";
import About from "../components/MainPage/About";

const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigationBar />
      <main>
        <Description />
        <Features />
        <About />
      </main>
    </Fragment>
  );
};

export default RootLayout;
