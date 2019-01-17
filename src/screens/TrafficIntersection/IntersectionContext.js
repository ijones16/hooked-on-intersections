import { createContext } from "react";

const IntersectionContext = createContext({
  north: ["green", "red", "red", "red"],
  east: ["red", "red", "red", "red"],
  south: ["red", "red", "red", "red"],
  west: ["red", "red", "red", "red"]
});

export default IntersectionContext;
