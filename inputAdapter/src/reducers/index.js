import { combineReducers } from 'redux';
import noteReducer from './todo.reducer';

export default combineReducers({
    todo: noteReducer
})