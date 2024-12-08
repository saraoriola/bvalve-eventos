import React from "react";
import videoSource from "../assets/img/adding.mp4";

const EventVideo = () => (
  <div className="image-wrapper">
    <video src={videoSource} className="event-image" autoPlay loop muted>
      Tu navegador no soporta la reproducción de videos.
    </video>
  </div>
);

export default EventVideo;
