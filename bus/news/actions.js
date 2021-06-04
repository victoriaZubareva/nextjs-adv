import { types } from './types';

export const newsActions = {
    fillNews: (newsData) => ({
        type: types.FILL_NEWS,
        payload: newsData,
    }),
};
