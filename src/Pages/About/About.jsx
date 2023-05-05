/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:flex gap-8 items-center Container my-20">
      <div className="basis-1/2">
        <img
          src="https://i.ibb.co/Kjt6X29/recipe6.jpg"
          className="w-100"
          alt="About img"
        />
      </div>
      <div className="basis-1/2 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold underline decoration-teal-600">
          About Us
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          porro placeat dignissimos maxime soluta ducimus aperiam eveniet
          maiores cupiditate. Officiis itaque quae ducimus ea rem est hic beatae
          non quas?
        </p>
        <Link to="">
          <button className="bg-lime-900 text-white px-5 py-2 mt-3 rounded-md">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
