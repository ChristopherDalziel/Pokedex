export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

const fetchPokemonStart = () => ({
  type: FETCH_POKEMON_START,
});

const fetchPokemonSuccess = (pokemon) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: { pokemon },
});

const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: { error },
});

// attempting to fetch the first 151 and console log
export const fetchPokemon = () => {
  console.log("start fetch");
  return (dispatch) => {
    dispatch(fetchPokemonStart());
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(errorMessage)
      .then((response) => response.json())
      .then((allPokemon) => console.log("151", allPokemon))
      .then((allPokemon) => {
        dispatch(fetchPokemonSuccess(allPokemon)) && console.log("fetched?");
        return allPokemon;
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure(error));
      });
  };
};

const errorMessage = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

export default errorMessage;
