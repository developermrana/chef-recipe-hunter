/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children, useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return Children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
