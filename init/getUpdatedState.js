/* Core */
import * as R from 'ramda';

/* Selectors */
import { selectUserId, selectUserType, selectVisitCount } from '../bus/user/selectors';

export const getUpdatedState = (state, dataState, tmpStatus) => {
    const initialReduxState = R.mergeDeepRight(dataState, {
        user: {
            userId: selectUserId(state),
            visitCounts: selectVisitCount(state),
        },
    });

    if (!tmpStatus) {
        initialReduxState.user.userType = selectUserType(state);
    } else {
        return R.over(R.lensProp('user'), R.omit(['userType']), initialReduxState);
    }

    return initialReduxState;
};
