/* Instruments */
import { userActions } from '../bus/user/actions';
import { countUserVisits } from '../helpers/countUserVisits';
import { getUserType } from '../helpers/getUserType';

export const initialDispatcher = async (context, store) => {
    const user = await countUserVisits(context);
    const userType = getUserType(user.visitCounts);

    store.dispatch(userActions.fillUser(user.userId));
    store.dispatch(userActions.setVisitCounts(user.visitCounts));
    store.dispatch(userActions.setUserType(userType));

    return store;
};
