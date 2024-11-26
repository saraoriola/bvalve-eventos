import React from "react";
import starIcon from "../assets/img/estrella.png";
import TimeUnit from "./TimeUnit";
import './styles/Countdown.css'

const Countdown = ({ timeLeft }) => (
  <div className="whitebox">
    <div className="countdown-wrapper">
      <img src={starIcon} alt="Estrella" className="countdown-icon" />
      <div className="countdown-timer">
        <TimeUnit label="Días" value={timeLeft.days} />
        <TimeUnit label="Horas" value={timeLeft.hours} />
        <TimeUnit label="Minutos" value={timeLeft.minutes} />
        <TimeUnit label="Segundos" value={timeLeft.seconds} />
      </div>
      <img src={starIcon} alt="Estrella" className="countdown-icon" />
    </div>
  </div>
);

export default Countdown;