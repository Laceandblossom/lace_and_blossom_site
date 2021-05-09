import React from "react";
import { Link } from "gatsby";

const NavbarLinks = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Collections">Collections</Link>
        </li>
        <li>
          <Link to="/BestSellers">Best Sellers</Link>
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
