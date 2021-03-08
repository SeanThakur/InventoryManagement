import {
    GET_ALL_PRODUCT,
    GET_PRODUCT_REQUEST
} from './types';

const initialState = {
    loading: false,
    products: []
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                products: []
            };
        case GET_ALL_PRODUCT:
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        default:
            return state;
    }
}