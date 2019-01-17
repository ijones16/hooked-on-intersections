import React, { useContext } from "react";
import Light from "../Light";
import IntersectionContext from "../../../../IntersectionContext";

function WestTrafficLights() {
  const intersection = useContext(IntersectionContext);
  const lights = intersection.west;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 35 }}>
      {lights.map(lightColor => (
        <div
          style={{
            border: "2px solid grey",
            height: 10,
            width: 35,
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Light color="red" isActive={lightColor === "red"} />
          <Light color="yellow" isActive={lightColor === "yellow"} />
          <Light color="green" isActive={lightColor === "green"} />
        </div>
      ))}
    </div>
  );
}

export default WestTrafficLights;
