/* Instruments */
import { DISCOUNTS_PATH, NEWS_PATH } from '../../constants';
import { getDataWithTransform } from './loader';

export const getFriendData = async () => {
    const [newsData, discountsData] = await Promise.all([
        getDataWithTransform(NEWS_PATH),
        getDataWithTransform(DISCOUNTS_PATH),
    ]);

    return {
        newsData,
        discountsData,
    };
};
