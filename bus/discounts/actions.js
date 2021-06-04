import { types } from './types';

export const discountsActions = {
    fillDiscounts: (discountsData) => ({
        type: types.FILL_DISCOUNTS,
        payload: discountsData,
    }),
};
