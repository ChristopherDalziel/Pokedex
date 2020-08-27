import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Tutorial = () => {
  const { tutorial, setTutorialDisplay, power } = useContext(PokedexContext);

  return (
    <div className="tutorial">
      <button
        className="tutorial--button"
        onClick={() => setTutorialDisplay(!tutorial)}
      >
        Toggle Tutorial
      </button>
      {tutorial ? (
        <>
          <div className="tutorial--power">
            {`Click here to power ${power ? "off" : "on"}`} &#8594;
          </div>
          <div className="tutorial--shiny">
            Click here to toggle Shiny version &#8594;
          </div>
          <div className="tutorial--search">
            Search Pokèmon by name or # &#8594;
          </div>
          <div className="tutorial--plusMinus">
            &#8592; See previous / next Pokèmon
          </div>
          <div className="tutorial--selection">
            &#8592; Click tile to display random Pokèmon
          </div>
          <div className="tutorial--statsAbilities">
            &#8592; Toggle between Stats / Abilities
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tutorial;
