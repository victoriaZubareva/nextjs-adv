import { USER_TYPES } from '../constants';

export const getUserTypeWeight = (type) => {
    if (type === USER_TYPES.GUEST) {
        return 1;
    } if (type === USER_TYPES.FRIEND) {
        return 2;
    } if (type === USER_TYPES.FAMILY_MEMBER) {
        return 3;
    }

    throw new Error('can not find right user type');
};
