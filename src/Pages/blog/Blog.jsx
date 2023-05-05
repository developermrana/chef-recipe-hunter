/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div className="Container my-20">
      <div className="mb-7">
        <h2 className="text-2xl">
          Question 1. Tell us the differences between uncontrolled and
          controlled components.
        </h2>
        <p>
          Ans:In React, controlled components refer to components that have
          their state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>
      </div>
      <div className="mb-7">
        <h2 className="text-2xl">
          Question 2. How to validate React props using PropTypes?
        </h2>
        <p>
          Ans: PropTypes is React internal mechanism for adding type checking to
          component props. React components use a special property called
          propTypes to set up type checking When props are passed to a React
          component, they are checked against the type definitions configured in
          the propTypes property. When an invalid value is passed for a prop, a
          warning is displayed on the JavaScript console:
        </p>
      </div>
      <div className="mb-7">
        <h2 className="text-2xl">
          Question 3. Tell us the difference between nodejs and express js?
        </h2>
        <p>
          Ans: NodeJS is the package, which provides the JavaScript run-time
          environment, whereas Express is a framework that sits on top of NodeJS
          and helps us to handle requests and responses.
        </p>
      </div>
      <div>
        <h2 className="text-2xl">
          Question 4. What is a custom hook, and why will you create a custom
          hook?
        </h2>
        <p>
          Ans: it can be reused easily, which makes the code cleaner and reduces
          the time to write the code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
