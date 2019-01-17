import React, { useState } from "react";
import Lights from "./components/Lights";
import Lanes from "./components/Lanes";
import IntersectionContext from "./IntersectionContext";

function TrafficIntersection() {
  const [intersection, setIntersection] = useState(DEFAULT_INTERSECTION);

  return (
    <IntersectionContext.Provider value={intersection}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ marginBottom: 60, display: "flex", flexDirection: "row" }}
        >
          <Lanes direction="south" />
          <div style={{ marginTop: 25 }}>
            <Lights direction="north" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              marginBottom: 60,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Lanes direction="east" />
            <Lights direction="west" />
          </div>
          <div
            style={{
              marginBottom: 60,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Lights direction="east" />
            <Lanes direction="west" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Lights direction="south" />
          <Lanes direction="north" />
        </div>
      </div>
    </IntersectionContext.Provider>
  );
}

const DEFAULT_INTERSECTION = {
  north: ["red", "green", "green", "green"],
  east: ["red", "red", "red", "red"],
  south: ["red", "red", "red", "red"],
  west: ["red", "red", "red", "red"]
};

export default TrafficIntersection;
