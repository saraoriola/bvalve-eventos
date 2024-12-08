import React, { useState } from "react";
import logoWhite from "../assets/img/logowhite.png";
import "./styles/Navbar.css";
import BusForm from "./BusForm"; // Importamos el componente BusForm

const Navbar = () => {
  const [showBusInfo, setShowBusInfo] = useState(false);

  const toggleBusInfo = () => {
    setShowBusInfo(!showBusInfo); // Cambia el estado al hacer clic
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "#000",
          height: "100px",
          width: "100%",
          position: "fixed",
          top: "0",
          zIndex: "1000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="navbar-content"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img src={logoWhite} alt="Logo Mi Evento" className="navbar-logo" />
        </div>
        <button
          onClick={toggleBusInfo}
          className="navbar-button"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            whiteSpace: "nowrap",
          }}
        >
          Reservar Bus
        </button>
      </nav>

      {showBusInfo && (
        <>
          {/* Fondo oscuro */}
          <div
            onClick={toggleBusInfo} // Cierra la tarjeta al hacer clic en el fondo
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: "998",
            }}
          ></div>

          {/* Card con botón de cierre */}
          <div
            className="card"
            style={{
              position: "fixed",
              top: "120px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "999",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              width: "90%",
              maxWidth: "600px",
              boxSizing: "border-box",
            }}
          >
            {/* Botón de cierre */}
            <button
              onClick={toggleBusInfo}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                color:"black"
              }}
            >
              ✕
            </button>
            <BusForm />
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
