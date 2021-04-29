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
} from '../types';
import { ServiceToDO } from '../services/todo.service';

export function getTodo() {
    return async dispatch => {
        dispatch( getTodoInit() );
        
        try {

            const response = await ServiceToDO.updateToDo();

            if ( response.status >= 400 ) {
                dispatch( getTodoError(true) );
            }

            dispatch( getTodoSuccess( response.data ) );

        } catch (error) {
            dispatch( getTodoError(true) );
        }
    }
}

const getTodoInit = () => ({
    type: GET_TODOS
})

const getTodoError = state => ({
    type: GET_TODOS_ERROR,
    payload: state
})

const getTodoSuccess = array => ({
    type: GET_TODOS_SUCCESS,
    payload: array
})
