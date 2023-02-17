import React from "react";
import { GiAtlas } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <nav className="container --flex-between">
        <div classname="logo">
          <GiAtlas size={45} />
        </div>
        <ul classname="home-links">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button classname="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <button classname="--btn --btn-primary">
              <Link to="/dashboard">Dashboard</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Home;
