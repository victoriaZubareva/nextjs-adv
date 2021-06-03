/* Instruments */
import { USER_TYPES } from '../constants';

export const getUserNextLevel = (type) => {
    switch (type) {
        case USER_TYPES.GUEST:
            return USER_TYPES.FRIEND;
        case USER_TYPES.FRIEND:
            return USER_TYPES.FAMILY_MEMBER;
        default:
            throw new Error(`unknown user next level ${type}`);
    }
};
