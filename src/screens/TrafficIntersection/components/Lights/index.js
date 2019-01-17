import React from "react";
import TrafficLight from "./components/TrafficLight";

function Lights({ direction, lights = [] }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", height: 35 }}>
      {lights.map((lightColor, index) => (
        <TrafficLight lightColor={lightColor} direction={direction} />
      ))}
    </div>
  );
}

export default Lights;
