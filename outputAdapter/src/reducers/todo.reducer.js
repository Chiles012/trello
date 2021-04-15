import {
    GET_NOTES,
    GET_NOTES_ERROR,
    GET_NOTES_SUCCESS
} from '../types'

const initState = {
    list: [],
    loading: false,
    error: null
}

export default function( state = initState, action ) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: [],
                loading: true,
                error: null
            }

        case GET_NOTES_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case GET_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                notes: action.payload
            }
    
        default:
            return state
    }
}