import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="indigo lighten-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Movies
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down ">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
