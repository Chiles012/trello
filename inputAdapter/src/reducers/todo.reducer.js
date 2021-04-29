import {
    GET_TODOS,
    GET_TODOS_ERROR,
    GET_TODOS_SUCCESS,
    CREATE_TODO,
    CREATE_TODO_ERROR,
    CREATE_TODO_SUCCESS,
    UPDATE_TODO,
    UPDATE_TODO_ERROR,
    UPDATE_TODO_SUCCESS,
    DELETE_TODO,
    DELETE_TODO_ERROR,
    DELETE_TODO_SUCCESS
} from '../types'

const initState = {
    todos: [],
    loading: false,
    error: null
}

export default function( state = initState, action ) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: [],
                loading: true,
                error: null
            }

        case GET_TODOS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
    
        default:
            return state
    }
}