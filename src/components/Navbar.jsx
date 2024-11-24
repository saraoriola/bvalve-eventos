import React from "react";
import logoWhite from "../assets/img/logowhite.png";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#000",
        height: "100px",
        width: "100%",
        position: "fixed",
        top: "0",
        zIndex: "1000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="navbar-content">
        <img src={logoWhite} alt="Logo Mi Evento" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
