import {
    GET_LOCATION_REQUEST,
    GET_ALL_LOCATION
} from './types';

const initialState = {
    loading: false,
    locations: []
}

/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function(state = initialState, action)
{
    switch(action.type)
    {
        case GET_LOCATION_REQUEST:
            return {
                ...state,
                loading: true,
                locations: []
            };
        case GET_ALL_LOCATION:
            return {
                ...state,
                loading: false,
                locations: action.payload
            };
        default:
            return state;
    }
}