import React from "react";

const PowerButton = (power) => {
  return (
    <button className="pokedex--onButton" data-testid="on-off">
      {power ? "Off" : "On"}
    </button>
  );
};

export default PowerButton;
