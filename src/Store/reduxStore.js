import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import starShipReducer from "./starShipReducer";
import logUserReducer from "./logUserReducer";

const defaultStore = {
  starships: [],
  error: undefined,
  loading: false,
  user: {},
  isLogged: false,
};

const rootReducer = combineReducers({
  user: logUserReducer,
  starships: starShipReducer,
});

export const store = createStore(
  rootReducer,
  defaultStore,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
