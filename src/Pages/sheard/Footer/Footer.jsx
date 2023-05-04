/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-zinc-900">
      <div className="Container text-center text-white py-2">
        <footer className="footer footer-center p-10  text-white">
          <div className="grid grid-flow-col gap-4">
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="blog" className="link link-hover">
              Blog
            </Link>
            <Link to="" className="link link-hover">
              Contact
            </Link>
            <Link to="" className="link link-hover">
              Service
            </Link>
          </div>
          <div>
            <div className="grid grid-flow-col gap-4">
              <a href="">
                <FaYoutube className="text-3xl" />
              </a>
              <a>
                <FaFacebook className="text-3xl" />
              </a>
              <a>
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </div>
          <div>
            <p>Copyright © 2023 - All right reserved by M.Rana</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
