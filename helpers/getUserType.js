import { USER_TYPES } from '../constants';

export const getUserType = (visitsCount) => {
    if (visitsCount < 3) {
        return USER_TYPES.GUEST;
    } if (visitsCount >= 3 && visitsCount < 5) {
        return USER_TYPES.FRIEND;
    } if (visitsCount >= 5) {
        return USER_TYPES.FAMILY_MEMBER;
    }

    throw new Error('can not find right user type');
};
