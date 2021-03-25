import { LOG_IN, LOG_OUT } from "./constants";

const defaultState = {
  user: {},
  isLogged: false,
};

const logUserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...action.payload,
        isLogged: true,
      };
    case LOG_OUT:
      return defaultState;

    default:
      return state;
  }
};
export default logUserReducer;
