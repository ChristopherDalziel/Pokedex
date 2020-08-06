import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "../actions/";

const initialState = { loading: false, data: {}, error: null };

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {};
    case FETCH_POKEMON_SUCCESS:
      return {};
    case FETCH_POKEMON_FAILURE:
      return {};
    default:
      return state;
  }
};
