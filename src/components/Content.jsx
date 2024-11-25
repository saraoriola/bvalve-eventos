import React from "react";
import "./styles/Content.css";
import ruta1 from "../assets/img/ruta1.png";


const Content = () => (
  <>
    {/* <div className="content-container">
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
        <br />
        <strong>¡Os esperamos con mucha ilusión!</strong>
      </p>
    </div>
    <div className="divider-line"></div> */}
    <div className="ruta-container">
      <img src={ruta1} alt="Evento de Navidad" className="ruta" />
    </div>
  </>
);

export default Content;
