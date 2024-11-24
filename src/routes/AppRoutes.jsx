import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Jueves from "../components/Jueves";
import Viernes from "../components/Viernes";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contenido" element={<Content />} />
        <Route path="/jueves" element={<Jueves />} />
        <Route path="/viernes" element={<Viernes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
