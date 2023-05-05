/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/blog/Blog";
import Login from "../Pages/Login&Logout/Login/Login";
import Register from "../Pages/Login&Logout/Register/Register";
import Chefs from "../Pages/Home/Chefs/Chefs";
import Recipes from "../Pages/Recipes/Recipes";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Hero from "../Pages/Hero/Hero";
import Home from "../Pages/Home/Home/Home";
import ChefDetails from "../Layout/ChefDetails";
import NavigationBar from "../Pages/sheard/NavigationBar/NavigationBar";
import ChefBanner from "../Pages/ChefBanner/ChefBanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chefs",
        element: <Chefs />,
      },
      {
        path: "/hero",
        element: <Hero />,
      },
      {
        path: "/recipes",
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/recipes"),
      },

      {
        path: `recipes/:id`,
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipes/${params.id}`),
      },
      // {
      //   path: `recipes/:id`,
      //   element: (
      //     <PrivateRoute>
      //       <ChefBanner />
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/chefs/${params.id}`),
      // },

      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
