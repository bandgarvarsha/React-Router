import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <div className="primary-nav">
      <nav>
        <NavLink to="/" style={navlinkStyle}>
          Home
        </NavLink>
        <NavLink to="about" style={navlinkStyle}>
          About
        </NavLink>
        <NavLink to="products" style={navlinkStyle}>
          Products
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
