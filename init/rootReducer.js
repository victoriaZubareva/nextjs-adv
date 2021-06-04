/* Core */
import { combineReducers } from 'redux';

/* Reducers */
import { userReducer as user } from '../bus/user';
import { carsReducer as cars } from '../bus/cars';
import { discountsReducer as discounts } from '../bus/discounts';
import { newsReducer as news } from '../bus/news';

export const rootReducer = combineReducers({
    user,
    cars,
    discounts,
    news,
});
