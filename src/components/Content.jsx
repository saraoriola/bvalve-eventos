import React from "react";
import "./styles/Content.css";
import ruta1 from "../assets/img/ruta1.png";


const Content = () => (
  <>
    <div className="ruta-container">
      <img src={ruta1} alt="Evento de Navidad" className="ruta" />
    </div>
  </>
);

export default Content;
