import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
} from "../actions/";

const initialState = { loading: false, data: [], error: null };

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        loading: true,
        data: [],
        error: null,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};
