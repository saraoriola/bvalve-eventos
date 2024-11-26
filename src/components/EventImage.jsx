import React from "react";
import eventImage from "../assets/img/navidad2023.jpg";

const EventImage = () => (
  <div className="image-wrapper">
    <img src={eventImage} alt="Evento de Navidad" className="event-image" />
  </div>
);

export default EventImage;
