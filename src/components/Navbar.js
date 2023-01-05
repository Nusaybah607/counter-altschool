import React, { useState } from "react";
import { Hamburger } from "../icons";
import { Link } from "react-router-dom";

const Navbar = ({ sidebar, setSidebar }) => {
  const closeSidebar = () => {
    setSidebar(false);
  };
  return (
    <div className={`${sidebar ? "show-sidebar navbar" : "navbar"}`}>
      <div className="nav-container">
        <Link to="/" onClick={closeSidebar}>Custom hook counter</Link>
        <Link to="/reducer" onClick={closeSidebar}>Reducer counter</Link>
        <Link to="/NotFound" onClick={closeSidebar}>Error page</Link>
        <Link to="/ErrorBoundary" onClick={closeSidebar}>Error boundary</Link>
      </div>
    </div>
  );
};

export default Navbar;
