import axios from 'axios'

import {
    GET_ERROR
} from '../error/types';

export const addLocation = (data) => dispatch => {
    axios
      .post("/api/location/add", data)
      .catch(err => dispatch({
          type: GET_ERROR,
          payload: err.response.data
      }));
  }