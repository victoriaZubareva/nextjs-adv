/* Instruments */
import { types } from './types';

const initialState = [];

export const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_CARS:
            return action.payload;

        default:
            return state;
    }
};
