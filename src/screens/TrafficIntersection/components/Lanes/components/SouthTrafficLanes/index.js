import React, { useContext } from "react";
import TrafficLane from "../TrafficLane";
import IntersectionContext from "../../../../IntersectionContext";

function SouthTrafficLanes({ direction }) {
  const intersection = useContext(IntersectionContext);
  const lanes = intersection.south;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
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

export default SouthTrafficLanes;
