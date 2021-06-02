/* Core */
import nookies from 'nookies';

/* Instruments */
import { db } from '../services';
import { nookiesOptions, USERS_PATH } from '../constants';

export const handleExistedUser = async (cookies, users) => {
    const updatedUsers = users.map((user) => {
        if (user.userId === cookies.userId) {
            const visitCounts = user.visitCounts + 1;

            return { ...user, visitCounts };
        }

        return user;
    });

    await db.saveUsers(USERS_PATH, updatedUsers);

    const updatedUser = updatedUsers.find(
        (user) => user.userId === cookies.userId,
    );

    return updatedUser;
};

export const handleNewUser = async (ctx, users) => {
    const userId = Math.random().toString(36).substr(2, 9);
    const user = { userId, visitCounts: 1 };

    users.push(user);
    nookies.set(ctx, 'userId', userId, nookiesOptions);

    await db.saveUsers(USERS_PATH, users);

    return user;
};

export const getExistedUser = (context, users) => {
    const cookies = nookies.get(context);

    const user = users.find((user) => user.userId === cookies.userId);

    if (!user) {
        nookies.destroy(context, 'userId');
    }

    return user;
};
