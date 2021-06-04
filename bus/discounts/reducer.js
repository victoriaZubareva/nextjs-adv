/* Instruments */
import { types } from './types';

const initialState = [];

export const discountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_DISCOUNTS:
            return action.payload;

        default:
            return state;
    }
};
