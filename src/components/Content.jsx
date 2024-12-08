import React from "react";
import "./styles/Content.css";
import ruta1 from "../assets/img/1.png";
import ruta2 from "../assets/img/2.png";
import ruta3 from "../assets/img/3.png";



const Content = () => (
  <>
    <div className="ruta-container">
      <img src={ruta1} alt="Evento de Navidad" className="ruta" />
      <img src={ruta2} alt="Evento de Navidad" className="ruta" />
      <img src={ruta3} alt="Evento de Navidad" className="ruta" />
    </div>
  </>
);

export default Content;
