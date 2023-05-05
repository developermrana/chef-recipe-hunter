/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero  ">
      <div className="Container text-white">
        <div className="md:w-1/2 space-y-5">
          <h2 className="text-5xl font-bold">Healthy Cookies</h2>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            neque iusto esse animi aperiam quia porro modi. Beatae minus id, vel
            reiciendis, eius, officia assumenda consequatur asperiores vitae
            iure ipsa.
          </p>
          <Link to="/recipes">
            <button className="bg-teal-600 text-white px-5 py-2 mt-3 rounded-md">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
