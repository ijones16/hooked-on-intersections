import React, { useState, useEffect } from "react";

function TrafficLane({ lightColor }) {
  const [cars, setCars] = useState([1, 1, 1]);
  const isGreenLight = lightColor === "green";

  useEffect(
    () => {
      const clearTrafficIntervalId = setInterval(() => {
        setCars(cars => [...cars, 1]);
      }, 1500);

      const stopTraffic = () => {
        if (clearTrafficIntervalId) {
          clearInterval(clearTrafficIntervalId);
        }
      };

      if (cars.length === 5) {
        stopTraffic();
      }
      return () => stopTraffic();
    },
    [cars]
  );

  useEffect(
    () => {
      let greenLightIntervalId;
      if (isGreenLight) {
        greenLightIntervalId = setInterval(() => {
          setCars(cars.slice(1));
        }, 1250);
      }

      const stopTrafficOnRedLight = () => {
        if (greenLightIntervalId) {
          clearInterval(greenLightIntervalId);
        }
      };

      if (!isGreenLight) {
        stopTrafficOnRedLight();
      }
      return () => stopTrafficOnRedLight();
    },
    [isGreenLight, cars]
  );

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        width: 14,
        height: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {cars.map(car => (
        <div
          style={{
            background: "darkgrey",
            borderRadius: 100,
            width: 10,
            height: 10
          }}
        />
      ))}
    </div>
  );
}

export default TrafficLane;
