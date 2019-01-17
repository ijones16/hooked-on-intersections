import React, { useContext } from "react";
import Light from "../Light";
import IntersectionContext from "../../../../IntersectionContext";

function NorthTrafficLights() {
  const intersection = useContext(IntersectionContext);
  const lights = intersection.north;
  return (
    <div style={{ display: "flex", flexDirection: "row", height: 35 }}>
      {lights.map(lightColor => (
        <div style={{ border: "2px solid grey", width: 10 }}>
          <Light color="red" isActive={lightColor === "red"} />
          <Light color="yellow" isActive={lightColor === "yellow"} />
          <Light color="green" isActive={lightColor === "green"} />
        </div>
      ))}
    </div>
  );
}

export default NorthTrafficLights;
