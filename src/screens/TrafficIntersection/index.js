import React, { useState, useEffect } from "react";
import Lights from "./components/Lights";
import Lanes from "./components/Lanes";
import IntersectionContext from "./IntersectionContext";
import trafficLightIntervals from "./TrafficLightConfigurations";

function TrafficIntersection() {
  const [intervalCount, setIntervalCount] = useState(0);
  const [intersection, setIntersection] = useState(
    trafficLightIntervals[intervalCount]
  );

  useEffect(
    () => {
      const clearTrafficIntervalId = setInterval(() => {
        setIntersection(trafficLightIntervals[intervalCount]);
        setIntervalCount((intervalCount + 1) % trafficLightIntervals.length);
      }, 2200);

      const clearTraffic = () => {
        if (clearTrafficIntervalId) {
          clearInterval(clearTrafficIntervalId);
        }
      };

      return () => clearTraffic();
    },
    [intervalCount]
  );
  return (
    <IntersectionContext.Provider value={intersection}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          background: "aliceblue"
        }}
      >
        <div
          style={{
            marginBottom: 60,
            display: "flex",
            flexDirection: "row",
            alignSelf: "center"
          }}
        >
          <Lanes direction="south" />
          <div style={{ marginTop: 25 }}>
            <Lights direction="north" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              marginBottom: 60,
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Lanes direction="east" />
            <div style={{ marginLeft: 11 }}>
              <Lights direction="west" />
            </div>
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
        <div
          style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
        >
          <Lights direction="south" />
          <Lanes direction="north" />
        </div>
      </div>
    </IntersectionContext.Provider>
  );
}

export default TrafficIntersection;
