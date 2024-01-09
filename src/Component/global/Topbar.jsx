// Topbar.js

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../Assets/logoimg/024.png";
import { NavLink } from "react-router-dom";
import "./Topbar.css";

function Topbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow sticky-top p-2"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <NavLink to="/">
        <Navbar.Brand href="#home">
          <img src={logo} className="toplogoimg" alt="Logo" />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <hr></hr>
          <hr></hr>
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
            onClick={handleNavItemClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio/VIT:Vinitika-Infotech"
            className="nav-link"
            activeClassName="active"
            onClick={handleNavItemClick}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/about-us/VIT:Vinitika-Infotech"
            className="nav-link"
            activeClassName="active"
            onClick={handleNavItemClick}
          >
            About Us
          </NavLink>
          <NavLink
            to="/technology/VIT:Vinitika-Infotech"
            className="nav-link"
            activeClassName="active"
            onClick={handleNavItemClick}
          >
            Technology
          </NavLink>
          <NavLink
            to="/contact/VIT:Vinitika-Infotech"
            className="nav-link"
            activeClassName="active"
            onClick={handleNavItemClick}
          >
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
