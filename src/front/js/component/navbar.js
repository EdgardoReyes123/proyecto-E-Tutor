import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <ul className="nav bg-light py-2">
        <li className="nav-item">
          <Link to="/home">
            <span className="navbar-brand mb-0 h1">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login">
            <span className="navbar-brand mb-0 h1">Login</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register">
            <span className="navbar-brand mb-0 h1">Register</span>
          </Link>
        </li>
      </ul>

      {/* <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">React Boilerplate</span>
          </Link>
          <div className="ml-auto">
            <Link to="/register">
              <button className="btn btn-primary">
                Check the Context in action
              </button>
            </Link>
          </div>
        </div>
      </nav> */}
    </div>
  );
};
