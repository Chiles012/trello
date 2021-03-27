import {
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS

} from '../types';

// state ...
const initState = {
    user: {},
    loading: false,
    error: null

}

export default function( state = initState, action ) {
    switch ( action.type ) {
        case GET_USER:
            return {
                ...state,
                loading: true,
                user: {},
                error: null

            }

        case GET_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }

        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload

            }
    
        default:
            break;
    }

}   