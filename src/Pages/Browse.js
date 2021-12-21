import React from "react";
// Hooks
import { useContent } from "../Hooks";

const Browse = () => {
  // we need the series and the filims
  const { series } = useContent("series");
  const { films } = useContent("films");
  console.log(series);
  console.log(films);
  // we need slides
  // pass it to the brows container

  return <p>Hello from Browse</p>;
};

export default Browse;
