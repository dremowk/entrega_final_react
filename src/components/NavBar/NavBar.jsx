// src/components/NavBar/NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">
          SneakerZone
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/hombres">Hombres</Link>
        </li>
        <li>
          <Link to="/mujeres">Mujeres</Link>
        </li>
        <li>
          <Link to="/ofertas">Ofertas</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
