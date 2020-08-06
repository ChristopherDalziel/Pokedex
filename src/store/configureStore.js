import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { pokemonReducer } from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      pokemon: pokemonReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
