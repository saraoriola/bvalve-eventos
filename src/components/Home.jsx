import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import eventImage from "../assets/img/navidad2023.jpg";
import starIcon from "../assets/img/estrella.png";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const eventDate = new Date("2024-12-12T17:00:00").getTime();
  const notificationStartDate = new Date("2024-12-09T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = eventDate - now;

      if (now >= notificationStartDate && now < eventDate) {
        setIsNotificationVisible(true);
      }

      if (remainingTime <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate, notificationStartDate]);

  return (
    <>
      {/* Event Image Section */}
      <div className="image-wrapper">
        <img src={eventImage} alt="Evento de Navidad" className="event-image" />
      </div>

      {/* Counter Section */}
      <div className="home-wrapper">
        {!isNotificationVisible ? (
          <>
            <div className="countdown-wrapper">
              <img src={starIcon} alt="Estrella" className="countdown-icon" />
              <div className="countdown-timer">
                <div className="time-unit">
                  <span className="time-number">{timeLeft.days}</span>
                  <div className="time-divider"></div>
                  <p className="time-label">Días</p>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.hours}</span>
                  <div className="time-divider"></div>
                  <p className="time-label">Horas</p>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.minutes}</span>
                  <div className="time-divider"></div>
                  <p className="time-label">Minutos</p>
                </div>
                <div className="time-unit">
                  <span className="time-number">{timeLeft.seconds}</span>
                  <div className="time-divider"></div>
                  <p className="time-label">Segundos</p>
                </div>
              </div>

              <img src={starIcon} alt="Estrella" className="countdown-icon" />
            </div>
            {/* Divider Section */}
            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">
                El <strong>jueves 12 de diciembre</strong>, organizamos
                transporte en bus hacia Valencia.
              </span>
              <a
                href="https://forms.gle/iU3xzyuLXJ1kHU1T8"
                className="divider-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserva tu plaza
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="countdown-wrapper">
              <img src={starIcon} alt="Estrella" className="countdown-icon" />
              <div className="countdown-timer">
                <div className="time-unit">
                  <span>{timeLeft.days}</span>
                  <p>Días</p>
                </div>
                <div className="time-unit">
                  <span>{timeLeft.hours}</span>
                  <p>Horas</p>
                </div>
                <div className="time-unit">
                  <span>{timeLeft.minutes}</span>
                  <p>Minutos</p>
                </div>
                <div className="time-unit">
                  <span>{timeLeft.seconds}</span>
                  <p>Segundos</p>
                </div>
              </div>
              <img src={starIcon} alt="Estrella" className="countdown-icon" />
            </div>
            <div className="divider-line"></div>
            <div className="notification-wrapper">
              <Link to="/contenido" className="divider-link">
                ¡Vamos!
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
