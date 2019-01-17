import React, { useState } from "react";
import Lights from "./components/Lights";
import Lanes from "./components/Lanes";
import IntersectionContext from "./IntersectionContext";

function TrafficIntersection() {
  const [intersection, setIntersection] = useState(DEFAULT_INTERSECTION);

  return (
    <IntersectionContext.Provider value={intersection}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: 30 }}>
          <Lights direction="north" lights={intersection.north} />
        </div>
        <Lanes direction="north" lanes={intersection.north} />
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
