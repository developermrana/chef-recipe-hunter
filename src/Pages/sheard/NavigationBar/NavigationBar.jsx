/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-teal-600">
        <div className="navbar Container flex justify-between  items-center h-20 text-white font-semibold">
          <div>
            <h1>logo</h1>
          </div>
          <nav>
            <div className="text-xl text-end md:hidden">
              <span
                className="inline-block "
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen === true ? <HiX /> : <HiMenu />}
              </span>
            </div>
            <div
              className={`md:flex items-center gap-4 absolute md:static duration-700 bg-teal-600 ${
                isOpen ? "top-20 end-0 px-8 py-4" : "-end-36 top-20"
              }`}
            >
              <Link to="/" className="block md:flex">
                Home
              </Link>
              <Link to="/blog" className="block md:flex">
                Blog
              </Link>
              <Link to="/login">
                <button className="bg-lime-900 text-white px-5 py-2">
                  Login
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
