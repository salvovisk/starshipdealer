import axios from "axios";
import {
  ADD_STARSHIP_ERROR,
  ADD_STARSHIP_REQUEST,
  ADD_STARSHIP_SUCCESS,
  DELETE_STARSHIP_ERROR,
  DELETE_STARSHIP_REQUEST,
  DELETE_STARSHIP_SUCCESS,
  DISCARD_ERROR,
  FETCH_ALL_STARSHIPS_ERROR,
  FETCH_ALL_STARSHIPS_REQUEST,
  FETCH_ALL_STARSHIPS_SUCCESS,
  LOG_IN,
  LOG_OUT,
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
      const { data } = await axios.post(
        "http://localhost:5000/starships",
        newStarship
      );
      dispatch({ type: ADD_STARSHIP_SUCCESS, payload: newStarship });
      console.log(data);
    } catch (error) {
      dispatch({ type: ADD_STARSHIP_ERROR, payload: error });
    }
  };
};

export const deleteShip = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_STARSHIP_REQUEST });
    try {
      const { data } = await axios.delete(
        `http://localhost:5000/starships/${id}`
      );
      if (data.status === 200) {
        dispatch({ type: DELETE_STARSHIP_SUCCESS, payload: id });
        dispatch(fetchAllShips());
      }
    } catch (error) {
      dispatch({ type: DELETE_STARSHIP_ERROR, payload: error });
    }
  };
};

export const discardError = () => ({
  type: DISCARD_ERROR,
});

export const logIn = (userData) => ({ type: LOG_IN, payload: userData });

export const logOut = () => ({ type: LOG_OUT });
