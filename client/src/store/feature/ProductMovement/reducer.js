import {
    GET_ALL_MOVEMENTS,
    GET_MOVEMENS_REQUEST
} from './types';

const initialState = {
    loading: false,
    movements: []
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_MOVEMENS_REQUEST:
            return {
                ...state,
                loading: true,
                movements: []
            };
        case GET_ALL_MOVEMENTS:
            return {
                ...state,
                loading: false,
                movements: action.payload
            };
        default:
            return state;
    }
}