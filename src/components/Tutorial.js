import React, { useContext } from "react";
import { PokedexContext } from "../context/PokedexContext";

const Tutorial = () => {
  const { setTutorialDisplay } = useContext(PokedexContext);
  return (
    <>
      <button onClick={() => setTutorialDisplay()}>Tutorial</button>
    </>
  );
};

export default Tutorial;
