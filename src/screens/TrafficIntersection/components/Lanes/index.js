import React from "react";
import NorthTrafficLanes from "./components/NorthTrafficLanes";
import EastTrafficLanes from "./components/EastTrafficLanes";
import SouthTrafficLanes from "./components/SouthTrafficLanes";
import WestTrafficLanes from "./components/WestTrafficLanes";

function Lanes({ direction }) {
  let TrafficLanes;
  switch (direction) {
    case "north":
      TrafficLanes = NorthTrafficLanes;
      break;
    case "east":
      TrafficLanes = EastTrafficLanes;
      break;
    case "south":
      TrafficLanes = SouthTrafficLanes;
      break;
    case "west":
      TrafficLanes = WestTrafficLanes;
      break;
    default:
      TrafficLanes = NorthTrafficLanes;
      break;
  }
  return <TrafficLanes direction={direction} />;
}

export default Lanes;
