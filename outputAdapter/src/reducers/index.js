import { combineReducers } from 'redux';

// Poner los reducers ...
import userReducer from "./user.reducer";

export default combineReducers({
    user: userReducer

})