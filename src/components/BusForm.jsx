import React from "react";
import "./styles/Content.css";
import bus from "../assets/img/monasterio.png";

const BusForm = () => (
  <>
    <div className="bus-info-dad">
      <div className="title-bus-info">
        <h3 className="bus-info-title">Jueves 12</h3>
      </div>
      <div className="bus-info">
        <div className="bus-info-left">
          <img src={bus} alt="Logo Mi Evento" className="bus" />
        </div>
        <div className="bus-info-right">
          <h3 className="bus-info-subtitle">Bus para la previa 😎</h3>

          <p className="bus-info-text">
            <p className="bus-info-text">
              Hemos preparado un servicio especial de transporte en bus para
              llevarte desde <strong>El Puig</strong> a{" "}
              <strong>Valencia</strong> (ida y vuelta) para comerciales,
              residentes de El Puig y/o alrededores.
            </p>
            <strong>Hora de salida:</strong> 18:00h desde 📍{" "}
            <a
              href="https://www.google.com/maps?q=39.587889,-0.303667"
              target="_blank"
              rel="noopener noreferrer"
              className="bus-info-link"
            >
              Prado del Rey
            </a>
          </p>
          <p className="bus-info-text">
            <strong>Regreso:</strong> 23:30h, al finalizar la actividad.
          </p>
          <a
            href="https://forms.gle/H4wgsRkZ8yttJf8XA"
            target="_blank"
            rel="noopener noreferrer"
            className="bus-info-button"
          >
            Reserva tu plaza
          </a>
        </div>
      </div>
    </div>
  </>
);

export default BusForm;
