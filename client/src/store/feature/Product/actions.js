import axios from 'axios'

import {
    GET_ERROR
} from '../error/types';

import {
    GET_ALL_PRODUCT,
    GET_PRODUCT_REQUEST
} from './types';

export const getAllProducts = () => dispatch => {
    dispatch({
        type: GET_PRODUCT_REQUEST
    });

    axios
      .get(`/api/product`)
      .then(res => dispatch({
        type: GET_ALL_PRODUCT,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
      }));
}

export const addProduct = (data) => dispatch => {
  axios
    .post("/api/product/add", data)
    .catch(err => dispatch({
        type: GET_ERROR,
        payload: err.response.data
    }));
}