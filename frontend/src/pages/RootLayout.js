import React, { Fragment } from "react";
import MainNavigationBar from "../components/MainNavigationBar";
import { Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <Fragment>
      <MainNavigationBar />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
