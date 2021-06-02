/* Instruments */
import { USER_TYPES } from '../constants';
import { getFamilyData, getFriendData, getGuestData } from '../services';
import { getUserType } from './getUserType';

export const getData = async (visitCounts) => {
    let newsData = null;
    let discountsData = null;
    let carsData = null;

    const userType = getUserType(visitCounts);

    switch (userType) {
        case USER_TYPES.GUEST: {
            ({ newsData } = await getGuestData());

            break;
        }
        case USER_TYPES.FRIEND: {
            ({ newsData, discountsData } = await getFriendData());

            break;
        }
        case USER_TYPES.FAMILY_MEMBER: {
            ({ newsData, discountsData, carsData } = await getFamilyData());

            break;
        }
        default:
            throw new Error('can not find right user type');
    }

    return { newsData, discountsData, carsData };
};
