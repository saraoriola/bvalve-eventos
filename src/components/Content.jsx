import React from "react";
import { Link } from "react-router-dom";
import "./styles/Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <h1 className="content-title">¡Bienvenidos al Evento!</h1>
      <p className="content-message">
        ¡Ha llegado el momento más esperado del año!
        <br />
        Nos alegra invitaros a nuestra Cena de Navidad, un evento especial
        organizado para celebrar nuestros logros y compartir juntos momentos de
        alegría al cerrar este año.
      </p>
      <p className="content-subtitle">
        Sabemos que ha sido un año de retos, pero también de grandes
        aprendizajes y éxitos. Por ello, queremos mantener viva nuestra
        tradición y brindar por todo lo que hemos conseguido como equipo.
        <br />
        <strong>¡Os esperamos con mucha ilusión!</strong>
      </p>
      <div className="content-buttons">
        <Link to="/jueves" className="content-button">
          Jueves
        </Link>
        <Link to="/viernes" className="content-button">
          Viernes
        </Link>
      </div>
    </div>
  );
};

export default Content;
