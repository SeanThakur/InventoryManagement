import axios from 'axios'

import {
    GET_ALL_LOCATION,
    GET_LOCATION_REQUEST
} from './types'

import {
    GET_ERROR
} from '../error/types';

export const getAllLocations = () => dispatch => {
    dispatch({
        type: GET_LOCATION_REQUEST
    });

    axios
      .get(`/api/location/all`)
      .then(res => dispatch({
        type: GET_ALL_LOCATION,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
      }));
}

export const addLocation = (data) => dispatch => {
    axios
      .post("/api/location/add", data)
      .catch(err => dispatch({
          type: GET_ERROR,
          payload: err.response.data
      }));
  }