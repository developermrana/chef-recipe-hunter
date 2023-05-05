/* eslint-disable no-unused-vars */
import React from "react";
import ChefBanner from "../Pages/ChefBanner/ChefBanner";
import Recipes from "../Pages/Recipes/Recipes";
import Footer from "../Pages/sheard/Footer/Footer";
import NavigationBar from "../Pages/sheard/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const ChefDetails = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ChefDetails;
