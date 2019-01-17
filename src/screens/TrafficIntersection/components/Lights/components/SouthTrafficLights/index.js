import React, { useContext } from "react";
import Light from "../Light";
import IntersectionContext from "../../../../IntersectionContext";

function NorthTrafficLights({ direction }) {
  const intersection = useContext(IntersectionContext);
  const lights = intersection.south;
  return (
    <div style={{ display: "flex", flexDirection: "row", height: 35 }}>
      {lights.map((lightColor, index) => (
        <div
          key={`${direction}-${index}-light`}
          style={{ border: "2px solid grey", width: 10 }}
        >
          <Light color="green" isActive={lightColor === "green"} />
          <Light color="yellow" isActive={lightColor === "yellow"} />
          <Light color="red" isActive={lightColor === "red"} />
        </div>
      ))}
    </div>
  );
}

export default NorthTrafficLights;
