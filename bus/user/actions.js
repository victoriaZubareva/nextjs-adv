import { types } from './types';

export const userActions = {
    fillUser: (userId) => ({
        type: types.FILL_USER,
        payload: userId,
    }),
    setVisitCounts: (nextVisitCounts) => ({
        type: types.SET_VISIT_COUNTS,
        payload: nextVisitCounts,
    }),
    setUserType: (nextVisitCounts) => ({
        type: types.SET_USER_TYPE,
        payload: nextVisitCounts,
    }),
};
