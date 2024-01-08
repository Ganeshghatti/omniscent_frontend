import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  if (!user.token) {
    return children;
  } else {
    return (
      <section
        className="w-screen h-screen flex flex-col gap-6 justify-center items-center"
        style={{ marginTop: "8vh" }}
      >
        <h1>Oops!</h1>
        <p className="text-gray2 text-lg font-normal">You are lost</p>
        <img
          src="./Assets/Images/pagenotfoundimg.png"
          className="w-1/3 md:w-96"
        />
        <Link
          to="/"
          className="text-navyblue text-lg font-semibold flex items-center"
          style={{ borderBottom: "2px solid gray" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="none"
          >
            <path
              d="M2.19824 5.94796L20.6434 5.94796C22.9403 5.94796 24.8024 7.81002 24.8024 10.107L24.8024 11.6326C24.8024 13.9296 22.9403 15.7917 20.6434 15.7917L6.20866 15.7917"
              stroke="#1F20AE"
              stroke-width="2.08134"
              stroke-linejoin="round"
            />
            <path
              d="M5.84375 1.57294C4.13521 3.28148 3.17729 4.23939 1.46875 5.94794L5.84375 10.3229"
              stroke="#1F20AE"
              stroke-width="2.08134"
              stroke-linejoin="round"
            />
          </svg>
          Go Home
        </Link>
      </section>
    );
  }
};

export default PrivateRoute;
