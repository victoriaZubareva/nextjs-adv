/* Core */
import { combineReducers } from 'redux';

/* Reducers */
import { userReducer as user } from '../bus/user';

export const rootReducer = combineReducers({
    user,
});
