import axios from "axios";
import {
  ADD_STARSHIP_ERROR,
  ADD_STARSHIP_REQUEST,
  ADD_STARSHIP_SUCCESS,
  DISCARD_ERROR,
  FETCH_ALL_STARSHIPS_ERROR,
  FETCH_ALL_STARSHIPS_REQUEST,
  FETCH_ALL_STARSHIPS_SUCCESS,
} from "./constants";

export const fetchAllShips = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ALL_STARSHIPS_REQUEST });
    try {
      const { data: starships } = await axios.get(
        "http://localhost:5000/starships"
      );
      dispatch({ type: FETCH_ALL_STARSHIPS_SUCCESS, payload: starships });
    } catch (error) {
      dispatch({ type: FETCH_ALL_STARSHIPS_ERROR, payload: error });
    }
  };
};

export const addShip = (newStarship) => {
  return async (dispatch) => {
    dispatch({ type: ADD_STARSHIP_REQUEST });
    try {
      const { data: starship } = await axios.post(
        "http://localhost:5000/starships",
        newStarship
      );
      dispatch({ type: ADD_STARSHIP_SUCCESS, payload: starship });
    } catch (error) {
      dispatch({ type: ADD_STARSHIP_ERROR, payload: error });
    }
  };
};

export const discardError = () => ({
  type: DISCARD_ERROR,
});
