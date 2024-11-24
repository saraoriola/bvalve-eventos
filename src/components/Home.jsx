import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [notification, setNotification] = useState(false);

  const eventDate = new Date("2024-12-12T17:00:00").getTime(); 
  const notificationDate = new Date("2024-12-09T00:00:00").getTime(); 

  useEffect(() => {


    const interval = setInterval(() => {
      const now = new Date().getTime(); 

      const distance = eventDate - now;

      if (now >= notificationDate && now < eventDate) {
        setNotification(true); 
      }

      if (distance <= 0) {
        clearInterval(interval); 
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate, notificationDate]);

  return (
    <div className="home-container">
      {!notification ? (
        <div className="counter">
          <h1 className="home-title">¡El evento comienza en:</h1>
          <div className="time-container">
            <div className="time-box">
              <span>{timeLeft.days}</span>
              <p>Días</p>
            </div>
            <div className="time-box">
              <span>{timeLeft.hours}</span>
              <p>Horas</p>
            </div>
            <div className="time-box">
              <span>{timeLeft.minutes}</span>
              <p>Minutos</p>
            </div>
            <div className="time-box">
              <span>{timeLeft.seconds}</span>
              <p>Segundos</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="notification">
          <h1 className="home-title">¡Ya casi estamos!</h1>
          <p className="home-message">
            El evento empieza el 12 de diciembre a las 17:00h. ¡Te esperamos!
          </p>
          <Link to="/contenido" className="home-go-button">
            ¡Vamos!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
