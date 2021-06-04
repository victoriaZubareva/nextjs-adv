import { types } from './types';

export const carsActions = {
    fillCars: (carsData) => ({
        type: types.FILL_CARS,
        payload: carsData,
    }),
};
