import React, { useContext } from "react";
import TrafficLane from "../TrafficLane";
import IntersectionContext from "../../../../IntersectionContext";

function WestTrafficLanes({ direction }) {
  const intersection = useContext(IntersectionContext);
  const lanes = intersection.west;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {lanes.map(lightColor => (
        <TrafficLane lightColor={lightColor} direction={direction} />
      ))}
    </div>
  );
}

export default WestTrafficLanes;
