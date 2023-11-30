import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionsTypes";
import axios from 'axios'

const URL = "http://localhost:3001/rickandmorty";

// * actions creators
export function addFav(character) {
    // console.log(character);
  return async function (dispatch) {
    try {
      const { data } = await  axios.post(`${URL}/fav`, character)
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function removeFav(id) {
  return async (dispatch) => {

    try {
      const { data } = await axios.delete(`${URL}/fav/${id}`)
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(payload) {
  return {
    type: ORDER,
    payload,
  };
}
