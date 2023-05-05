/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiHeart } from "react-icons/hi2";

const Recipe = ({ recipeData }) => {
  const {
    recipe_image,
    rating,
    cooking_method,
    ingredients,
    recipe_name,
    chef_id,
  } = recipeData;
  const [favorite, setFavorite] = useState(false);
  const [chef, setChef] = useState({});
  const addFavorite = () => {
    setFavorite(!favorite);
    toast("Add To Favorite");
  };

  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${chef_id}`)
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl my-20">
        <figure>
          <img src={recipe_image} alt="recipe img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Recipe Name: {recipe_name}</h2>
          <p>
            <span className="font-bold text-lg">Cooking Method: </span>
            {cooking_method}
          </p>
          <p className="font-bold text-lg">Ingredients: </p>
          {ingredients.map((ingra, i) => (
            <p key={i}>{ingra}</p>
          ))}
          <div className="flex justify-between">
            <div>
              <Rating
                readonly
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className="text-yellow-500" />}
                fullSymbol={<FaRegStar />}
              />
              <span className="ms-2 ">{rating}</span>
            </div>
            <ToastContainer />
            <span onClick={addFavorite}>
              {favorite ? <HiHeart /> : <FiHeart />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
