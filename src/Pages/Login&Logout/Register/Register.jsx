// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo_URL.value;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    createUser(email, password)
      .then(() => {})
      .catch((error) => {
        setError(error);
      });
    form.reset();
  };
  return (
    <div className="Container">
      <div className="md:w-1/2 mx-auto">
        <h2 className="text-2xl py-8">Please login</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label htmlFor="name" className="inline-block mb-2 text-lg">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your full name"
              required
              className="input input-bordered input-info w-full block"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photo_URL" className="inline-block mb-2 text-lg">
              Your Photo URL
            </label>
            <input
              type="url"
              name="photo_URL"
              id="photo_URL"
              placeholder="enter your photo url"
              required
              className="input input-bordered input-info w-full block"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="inline-block mb-2 text-lg">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter your email"
              required
              className="input input-bordered input-info w-full block"
            />
          </div>
          <div className="mb-3">
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
              required
              className="input input-bordered input-info w-full block"
            />
          </div>
          <span className="flex items-center mt-3">
            <input type="checkbox" className="checkbox me-3" /> see password
          </span>
          {error ? (
            <div className="alert alert-error shadow-lg mt-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error.message}</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="bg-teal-600 text-white w-full my-5 py-2"
          >
            Login
          </button>
        </form>
        <p className="text-lg mb-5">
          Already have an account
          <Link to="/login" className="text-blue-800 underline ms-3">
            please login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
