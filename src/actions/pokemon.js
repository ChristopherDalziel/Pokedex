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

export const fetchPokemon = () => {};
