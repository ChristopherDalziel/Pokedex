import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PokedexProvider } from "../../context/PokedexContext";

import Pokedex from "../Pokedex";
import Tutorial from "../Tutorial";

const App = () => {
  return (
    <PokedexProvider>
      <main className="container">
        <Pokedex />
        <Tutorial />
        <a
          className="github"
          target="_blank"
          href="https://github.com/ChristopherDalziel/Pokedex"
          title="Link to projects GitHub repository"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </main>
    </PokedexProvider>
  );
};

export default App;
