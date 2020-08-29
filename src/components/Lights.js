import React from "react";

const Lights = () => {
  return (
    <div data-testid="lights">
      <div className="pokedex--light" />
      <div className="pokedex--light__red" />
      <div className="pokedex--light__yellow" />
      <div className="pokedex--light__green" />
      <div className="pokedex--light__yellow_big" />
    </div>
  );
};

export default Lights;
