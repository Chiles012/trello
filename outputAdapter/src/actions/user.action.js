import {
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS

} from '../types';
import { userService } from '../services/user.service';

export function getUser() {
    return async dispatch => {
        dispatch( getUserInit() );

        const response = await userService.getUser();

        if ( response.success ) {
            dispatch( getUserSuccess( { name: 'Christian Serrano', Age: 12, Tasks: [] } ) );

        } else {
            dispatch( getUserError( true ) );

        }

    }

}

// Funciones ...
const getUserInit = () => ({
    type: GET_USER

})

const getUserError = state => ({
    type: GET_USER_ERROR,
    payload: state

}) 

const getUserSuccess = user => ({
    type: GET_USER_SUCCESS,
    payload: user

})