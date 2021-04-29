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

            const response = await ServiceToDO.getToDo();

            if ( response.status >= 400 ) {
                dispatch( getTodoError(true) );
            }

            dispatch( getTodoSuccess( response.data ) );

        } catch (error) {
            dispatch( getTodoError(true) );
        }
    }
}

export function createTodo() {
    return async dispatch => {
        dispatch( createTodoInit() );
        
        try {

            const response = await ServiceToDO.createToDo();

            if ( response.status >= 400 ) {
                dispatch( createTodoError(true) );
            }

            dispatch( createTodoSuccess( response.data ) );

        } catch (error) {
            dispatch( createTodoError(true) );
        }
    }
}
export function updateTodo() {
    return async dispatch => {
        dispatch( updateTodoInit() );
        
        try {

            const response = await ServiceToDO.updateToDo();

            if ( response.status >= 400 ) {
                dispatch( updateTodoError(true) );
            }

            dispatch( updateTodoSuccess( response.data ) );

        } catch (error) {
            dispatch( updateTodoError(true) );
        }
    }
}

export function deleteTodo() {
    return async dispatch => {
        dispatch( deleteTodoInit() );
        
        try {

            const response = await ServiceToDO.deleteToDo();

            if ( response.status >= 400 ) {
                dispatch( deleteTodoError(true) );
            }

            dispatch( deleteTodoSuccess( response.data ) );

        } catch (error) {
            dispatch( deleteTodoError(true) );
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

const createTodoInit = () => ({
    type: CREATE_TODO
})

const createTodoError = state => ({
    type: CREATE_TODO_ERROR,
    payload: state
})

const createTodoSuccess = array => ({
    type: CREATE_TODO_SUCCESS,
    payload: array
})

const updateTodoInit = () => ({
    type: UPDATE_TODO
})

const updateTodoError = state => ({
    type: UPDATE_TODO_ERROR,
    payload: state
})

const updateTodoSuccess = array => ({
    type: UPDATE_TODO_SUCCESS,
    payload: array
})

const deleteTodoInit = () => ({
    type: DELETE_TODO
})

const deleteTodoError = state => ({
    type: DELETE_TODO_ERROR,
    payload: state
})

const deleteTodoSuccess = array => ({
    type: DELETE_TODO_SUCCESS,
    payload: array
})