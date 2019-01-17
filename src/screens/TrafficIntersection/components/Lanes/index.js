import React from "react";
import TrafficLane from "./components/TrafficLane";

function Lanes({ direction, lanes = [] }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {lanes.map((lightColor, index) => (
        <TrafficLane lightColor={lightColor} direction={direction} />
      ))}
    </div>
  );
}

export default Lanes;
