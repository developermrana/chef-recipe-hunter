/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/sheard/NavigationBar/NavigationBar";
import Footer from "../Pages/sheard/Footer/Footer";

const Main = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
