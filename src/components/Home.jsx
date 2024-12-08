import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";
import EventImage from "./EventImage";
import Content from "./Content";
import "./styles/Home.css";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const eventDate = new Date("2024-12-12T17:00:00").getTime();
  const notificationStartDate = new Date("2024-12-08T00:00:00").getTime();

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
      <EventImage />
      <div>
        {!isNotificationVisible ? (
          <>
            <Countdown timeLeft={timeLeft} />
          </>
        ) : (
          <>
            <Countdown timeLeft={timeLeft} />
            <Content />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
