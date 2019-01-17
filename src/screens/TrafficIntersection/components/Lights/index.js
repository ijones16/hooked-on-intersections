import React from "react";
import NorthTrafficLights from "./components/NorthTrafficLights";
import EastTrafficLights from "./components/EastTrafficLights";
import SouthTrafficLights from "./components/SouthTrafficLights";
import WestTrafficLights from "./components/WestTrafficLights";

function Lights({ direction }) {
  let TrafficLights;
  switch (direction) {
    case "north":
      TrafficLights = NorthTrafficLights;
      break;
    case "east":
      TrafficLights = EastTrafficLights;
      break;
    case "south":
      TrafficLights = SouthTrafficLights;
      break;
    case "west":
      TrafficLights = WestTrafficLights;
      break;
    default:
      TrafficLights = NorthTrafficLights;
      break;
  }
  return <TrafficLights direction={direction} />;
}

export default Lights;
