/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Container">
      <div className="md:w-1/2 mx-auto">
        <h2 className="text-2xl py-8">Please login</h2>
        <form>
          <div>
            <label htmlFor="email" className="inline-block mb-2 text-lg">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              className="input input-bordered input-info w-full block"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="inline-block mb-2 mt-4 text-lg"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              className="input input-bordered input-info w-full block"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-600 text-white w-full my-5 py-2"
          >
            Login
          </button>
        </form>
        <p className="text-lg mb-5">
          Don't Have An Account
          <Link to="/register" className="text-blue-800 underline ms-3">
            please register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
