import React from "react";
import { Link } from "react-router-dom"; 
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">¡Bienvenidos al Evento!</h1>
      <p className="home-subtitle">
        Explora las actividades y detalles del evento aquí.
      </p>
      <div className="home-buttons">
        <Link to="/jueves" className="home-button">
          Jueves
        </Link>
        <Link to="/viernes" className="home-button">
          Viernes
        </Link>
      </div>
    </div>
  );
};

export default Home;
