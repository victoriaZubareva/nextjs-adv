/* Instruments */
import { types } from './types';

const initialState = [];

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_NEWS:
            return action.payload;

        default:
            return state;
    }
};
