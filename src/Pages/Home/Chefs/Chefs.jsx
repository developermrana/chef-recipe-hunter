/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Chefs = () => {
  const chefs = useLoaderData();

  return (
    <div className="Container">
      <h2 className="text-3xl text-center fw-bold my-5">Our Chefs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
