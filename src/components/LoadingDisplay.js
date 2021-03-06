import React from "react";
import spinner from "../assets/pika-load.gif";

const LoadingDisplay = () => {
  return (
    <img
      className="pokedex--screen__load"
      src={spinner}
      alt="Loading..."
      data-testid="screenLoad"
    />
  );
};

export default LoadingDisplay;
