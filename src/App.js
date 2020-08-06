import React from "react";

function App() {
  return (
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50").then((response) =>
      console.log(response)
    ),
    (
      <main className="test">
        <h1>Pokèdex</h1>
        <h2>Using Pokèmon api</h2>
      </main>
    )
  );
}

export default App;
