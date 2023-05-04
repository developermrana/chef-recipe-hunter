/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
  const { id, years_of_experience, picture, number_of_recipes, name, likes } =
    chef;
  return (
    <div className=" rounded-lg max-w-sm">
      <img src={picture} className="w-full h-72 rounded-lg" alt="Chef img" />
      <div className="p-5 bg-lime-900 text-white space-y-3">
        <h2 className="text-2xl">Name: {name}</h2>
        <p>Total Recipe: {number_of_recipes}</p>
        <div className="flex justify-between">
          <p>Experience: {years_of_experience}</p>
          <p>Like: {likes}</p>
        </div>
        <Link to={`/recipes/${id}`}>
          <button className="bg-teal-600 text-white px-5 py-2 mt-3 rounded-md">
            View Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
