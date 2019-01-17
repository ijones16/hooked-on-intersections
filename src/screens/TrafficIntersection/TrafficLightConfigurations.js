const redLights = {
  north: ["red", "red", "red", "red"],
  east: ["red", "red", "red", "red"],
  south: ["red", "red", "red", "red"],
  west: ["red", "red", "red", "red"]
};

const northSouthTurnGreen = {
  north: ["green", "red", "red", "red"],
  east: ["red", "red", "red", "red"],
  south: ["red", "red", "red", "green"],
  west: ["red", "red", "red", "red"]
};

const northSouthTurnYellow = {
  north: ["yellow", "red", "red", "red"],
  east: ["red", "red", "red", "red"],
  south: ["red", "red", "red", "yellow"],
  west: ["red", "red", "red", "red"]
};

const northSouthGreen = {
  north: ["red", "green", "green", "green"],
  east: ["red", "red", "red", "red"],
  south: ["red", "green", "green", "green"],
  west: ["red", "red", "red", "red"]
};

const northSouthYellow = {
  north: ["red", "yellow", "yellow", "yellow"],
  east: ["red", "red", "red", "red"],
  south: ["red", "yellow", "yellow", "yellow"],
  west: ["red", "red", "red", "red"]
};

const eastWestTurnGreen = {
  north: ["red", "red", "red", "red"],
  east: ["red", "red", "red", "green"],
  south: ["red", "red", "red", "red"],
  west: ["green", "red", "red", "red"]
};

const eastWestTurnYellow = {
  north: ["red", "red", "red", "red"],
  east: ["red", "red", "red", "yellow"],
  south: ["red", "red", "red", "red"],
  west: ["yellow", "red", "red", "red"]
};

const eastWestGreen = {
  north: ["red", "red", "red", "red"],
  east: ["red", "green", "green", "green"],
  south: ["red", "red", "red", "red"],
  west: ["red", "green", "green", "green"]
};

const eastWestYellow = {
  north: ["red", "red", "red", "red"],
  east: ["red", "yellow", "yellow", "yellow"],
  south: ["red", "red", "red", "red"],
  west: ["red", "yellow", "yellow", "yellow"]
};

export default [
  northSouthTurnGreen,
  northSouthTurnYellow,
  redLights,
  northSouthGreen,
  northSouthYellow,
  redLights,
  eastWestTurnGreen,
  eastWestTurnYellow,
  redLights,
  eastWestGreen,
  eastWestYellow,
  redLights
];
