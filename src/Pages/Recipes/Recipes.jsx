/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>this is recipe</div>;
};

export default Recipes;
