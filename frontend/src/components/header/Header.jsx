import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header className="bg-indigo-950">
      <div className="text-xl text-white">eLearning</div>

      <div className="link">
        <Link to={"/"} className="text-white">Home</Link>
        <Link to={"/courses"} className="text-white">Courses</Link>
        <Link to={"/about"} className="text-white">About</Link>
        {isAuth ? (
          <Link to={"/account"} className="text-white">Account</Link>
        ) : (
          <Link to={"/login"} className="text-white">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
