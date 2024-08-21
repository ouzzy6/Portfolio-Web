import React from "react";
import { Link, useLocation } from 'react-router-dom';
import "../components/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="Navbar">
      <ul className="Navbar-Menu">
        <li className={`Navbar-item ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`Navbar-item ${location.pathname === "/aboutme" ? "active" : ""}`}>
          <Link to="/aboutme">About Me</Link>
        </li>
        <li className={`Navbar-item ${location.pathname === "/projects" ? "active" : ""}`}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={`Navbar-item ${location.pathname === "/skills" ? "active" : ""}`}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={`Navbar-item ${location.pathname === "/contact" ? "active" : ""}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
