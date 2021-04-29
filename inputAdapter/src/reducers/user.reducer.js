import {
    CREATE_USER,
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    UPDATE_USER,
    UPDATE_USER_ERROR,
    UPDATE_USER_SUCCESS,
    DELETE_USER,
    DELETE_USER_ERROR,
    DELETE_USER_SUCCESS
} from '../types';

const initState = {
    login: false,
    users: [],
    error: null,
    loading: false
}

export default function( state = initState, action ) {
    switch ( action.type ) {
        

    }
}
