import {
    GET_NOTES,
    GET_NOTES_ERROR,
    GET_NOTES_SUCCESS
} from '../types';

export function getTodo() {
    return async dispatch => {
        dispatch( getTodoInit() );

        dispatch( getTodoError(true) );

        dispatch( getTodoSuccess(["hola", "hola1", "hola2"]) );
    }
}

const getTodoInit = () => ({
    type: GET_NOTES
})

const getTodoError = state => ({
    type: GET_NOTES_ERROR,
    payload: state
})

const getTodoSuccess = array => ({
    type: GET_NOTES_SUCCESS,
    payload: array
})
