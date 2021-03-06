import React, { useState, useEffect } from "react";
import getRandomInt from "./lib/getRandomInt";

function TrafficLane({ lightColor, direction }) {
  const [cars, setCars] = useState([1]);
  const isGreenLight = lightColor === "green";
  const isYellowLight = lightColor === "yellow";
  const isNorthOrSouth = direction === "north" || direction === "south";
  const isSouthEast = direction === "south" || direction === "east";

  const styles = isNorthOrSouth
    ? {
        width: 14,
        height: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    : {
        width: 50,
        height: 14,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
      };

  const southEastLaneStyles = isSouthEast ? { justifyContent: "flex-end" } : {};

  useEffect(
    () => {
      const clearTrafficIntervalId = setInterval(() => {
        if (getRandomInt(3) === 1) {
          setCars(cars => {
            return [...cars, 1];
          });
        }
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
      if (isGreenLight || isYellowLight) {
        greenLightIntervalId = setInterval(() => {
          setCars(cars.slice(1));
        }, 1250);
      }

      const stopTrafficOnRedLight = () => {
        if (greenLightIntervalId) {
          clearInterval(greenLightIntervalId);
        }
      };

      if (!(isGreenLight || isYellowLight)) {
        stopTrafficOnRedLight();
      }
      return () => stopTrafficOnRedLight();
    },
    [isGreenLight, cars]
  );

  return (
    <div style={{ ...styles, ...southEastLaneStyles, background: "lightgrey" }}>
      {cars.map((car, index) => (
        <div
          key={`${index}-car`}
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
