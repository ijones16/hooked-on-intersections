import React from "react";

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

export default Light;
