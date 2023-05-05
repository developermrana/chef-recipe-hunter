/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefBanner = () => {
  const chef = useLoaderData();
  const { picture, name, number_of_recipes, years_of_experience, likes } = chef;
  return (
    <div className="md:flex max-h-2xl justify-between bg-lime-900 items-center">
      <div>
        <img src={picture} className="w-full h-72 rounded-lg" alt="Chef img" />
      </div>
      <div className=" rounded-lg max-w-sm">
        <div className="p-5 bg-lime-900 text-white space-y-3">
          <h2 className="text-2xl">Name: {name}</h2>
          <p>Total Recipe: {number_of_recipes}</p>
          <div className="flex justify-between">
            <p>Experience: {years_of_experience}</p>
            <p>Like: {likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
