import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentDate = new Date(); 
  const unlockDate = new Date("2024-12-09T00:00:00"); 

  if (currentDate < unlockDate) {
    return <Navigate to="/" />; 
  }

  return children;
};

export default ProtectedRoute;
