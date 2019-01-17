import React, { useContext } from "react";
import TrafficLane from "../TrafficLane";
import IntersectionContext from "../../../../IntersectionContext";

function NorthTrafficLanes({ direction }) {
  const intersection = useContext(IntersectionContext);
  const lanes = intersection.north;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {lanes.map((lightColor, index) => (
        <TrafficLane lightColor={lightColor} direction={direction} />
      ))}
    </div>
  );
}

export default NorthTrafficLanes;
