/* Core */
import nookies from 'nookies';

/* Instruments */
import { db } from '../services';
import { USERS_PATH } from '../constants';
import { getExistedUser, handleExistedUser, handleNewUser } from './userHandlers';

export const countUserVisits = async (context) => {
    const cookies = nookies.get(context);

    const users = await db.getUsers(USERS_PATH);

    const user = getExistedUser(context, users);

    if (user && cookies.hasOwnProperty('userId')) {
        const { visitCounts } = await handleExistedUser(cookies, users);

        return visitCounts;
    }
    const { visitCounts } = await handleNewUser(context, users);

    return visitCounts;
};
