/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
  const recipesData = useLoaderData();

  return (
    <div className="Container grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {recipesData.map((recipeData) => (
        <Recipe key={recipeData.id} recipeData={recipeData} />
      ))}
    </div>
  );
};

export default Recipes;
