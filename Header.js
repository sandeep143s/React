import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "Green" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Employee DashBoard
      </NavLink>
      { " | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About 
      </NavLink>
      { " | "}
      <NavLink to="/contactus" activeStyle={activeStyle}>
      ContactUs
      </NavLink>
    </nav>
  );
};

export default Header;
