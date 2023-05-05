/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Chefs = () => {
  // const chefs = useLoaderData();
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://assinment-ten-server-mrana565.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="Container my-20">
      <h2 className="text-3xl text-center font-bold my-5 underline decoration-teal-600">
        Our Chefs
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
};

export default Chefs;
