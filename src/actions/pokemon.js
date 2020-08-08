import errorMessage from "../utils/errorMessage";

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

export const fetchPokemon = (number = 1) => {
  return (dispatch) => {
    dispatch(fetchPokemonStart());
    fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then(errorMessage)
      .then((response) => response.json())
      .then((pokemonInfo) => {
        dispatch(fetchPokemonSuccess(pokemonInfo));
        return pokemonInfo;
      })
      .catch((error) => {
        dispatch(fetchPokemonFailure(error));
      });
  };
};
