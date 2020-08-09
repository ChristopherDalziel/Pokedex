import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokedex = () => {
  const [data, setData] = useState({ pokemon: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon/1");

      setData(result.data);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="pokedex">
      <div>{data.name}</div>
      <img src={data.sprites.map((sprite) => sprite.front_default)} />
    </div>
  );
};

export default Pokedex;
