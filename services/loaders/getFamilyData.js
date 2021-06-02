/* Instruments */
import { CARS_PATH, DISCOUNTS_PATH, NEWS_PATH } from '../../constants';
import { getDataWithTransform } from './loader';

export const getFamilyData = async () => {
    const [newsData, discountsData, carsData] = await Promise.all([
        getDataWithTransform(NEWS_PATH),
        getDataWithTransform(DISCOUNTS_PATH),
        getDataWithTransform(CARS_PATH),
    ]);

    return {
        newsData,
        discountsData,
        carsData,
    };
};
