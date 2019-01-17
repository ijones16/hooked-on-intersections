import React, { useContext } from "react";
import TrafficLane from "../TrafficLane";
import IntersectionContext from "../../../../IntersectionContext";

function EastTrafficLanes({ direction }) {
  const intersection = useContext(IntersectionContext);
  const lanes = intersection.east;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {lanes.map((lightColor, index) => (
        <TrafficLane
          key={`${direction}-${index}-lane`}
          lightColor={lightColor}
          direction={direction}
        />
      ))}
    </div>
  );
}

export default EastTrafficLanes;
