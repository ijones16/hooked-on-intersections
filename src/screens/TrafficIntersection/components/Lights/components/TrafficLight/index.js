import React from "react";

function TrafficLight({ style, lightColor }) {
  return (
    <div style={{ border: "2px solid grey", width: 10, ...style }}>
      <Light color="red" isActive={lightColor === "red"} />
      <Light color="yellow" isActive={lightColor === "yellow"} />
      <Light color="green" isActive={lightColor === "green"} />
    </div>
  );
}

function Light({ color, isActive }) {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        background: color,
        opacity: isActive ? "1" : ".3",
        borderRadius: 100
      }}
    />
  );
}

export default TrafficLight;
