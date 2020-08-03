import React from "react";

function App() {
  return (
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50").then((response) =>
      console.log(response)
    ),
    (
      <div className="App">
        <h1>pokedex</h1>
      </div>
    )
  );
}

export default App;
