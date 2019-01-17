import React, { useContext } from "react";
import Light from "../Light";
import IntersectionContext from "../../../../IntersectionContext";

function EastTrafficLights() {
  const intersection = useContext(IntersectionContext);
  const lights = intersection.east;

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
          <Light color="green" isActive={lightColor === "green"} />
          <Light color="yellow" isActive={lightColor === "yellow"} />
          <Light color="red" isActive={lightColor === "red"} />
        </div>
      ))}
    </div>
  );
}

export default EastTrafficLights;
