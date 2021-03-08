import axios from 'axios'

import {
    GET_ERROR
} from '../error/types';

import {
  GET_ALL_MOVEMENTS,
  GET_MOVEMENS_REQUEST
} from './types';

export const getAllMovements = () => dispatch => {
    dispatch({
        type: GET_MOVEMENS_REQUEST
    });

    axios
      .get(`/api/movement`)
      .then(res => dispatch({
        type: GET_ALL_MOVEMENTS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
      }));
}

export const addMovement = (data) => dispatch => {
  axios
    .post("/api/movement/add", data)
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}