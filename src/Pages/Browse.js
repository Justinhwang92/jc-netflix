import React from "react";
// Containers
import { BrowseContainer } from "../Containers/Browse";
// Hooks
import { useContent } from "../Hooks";
// Filters
import selectionFilter from "../Utils/selection-filter";

const Browse = () => {
  // we need the series and the filims
  const { series } = useContent("series");
  const { films } = useContent("films");

  // we need slides
  const slides = selectionFilter({ series, films });

  // pass it to the brows container

  return <BrowseContainer slides={slides} />;
};

export default Browse;
