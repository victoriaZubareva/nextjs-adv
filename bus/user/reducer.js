/* Instruments */
import { types } from './types';

const initialState = {
    userId: null,
    visitCounts: 0,
    userType: 'GUEST',
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_USER:
            return { ...state, userId: action.payload };

        case types.SET_VISIT_COUNTS:
            return { ...state, visitCounts: action.payload };

        case types.SET_USER_TYPE: {
            return { ...state, userType: action.payload };
        }

        default:
            return state;
    }
};
