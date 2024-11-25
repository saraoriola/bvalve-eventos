import React from "react";

const TimeUnit = ({ label, value }) => (
  <div className="time-unit">
    <span className="time-number">{value}</span>
    <div className="time-divider"></div>
    <p className="time-label">{label}</p>
  </div>
);

export default TimeUnit;
