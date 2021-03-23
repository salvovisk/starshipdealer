import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import starShipReducer from "./starShipReducer";

const defaultStore = {
  starships: [],
  error: undefined,
  loading: false,
};

export const store = createStore(
  starShipReducer,
  defaultStore,
  // compose(
    applyMiddleware(
      thunk,
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  // )
);
