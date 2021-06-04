/* Instruments */
import { getData } from '../helpers/getData';

/* Actions */
import { newsActions } from '../bus/news/actions';
import { carsActions } from '../bus/cars/actions';
import { discountsActions } from '../bus/discounts/actions';

/* Selectors */
import { selectVisitCount } from '../bus/user/selectors';

export const initialDataDispatcher = async (store, tmpStatus = false) => {
    const visitCounts = selectVisitCount(store.getState());
    const { newsData, discountsData, carsData } = await getData(visitCounts, tmpStatus);

    store.dispatch(newsActions.fillNews(newsData));
    store.dispatch(carsActions.fillCars(carsData));
    store.dispatch(discountsActions.fillDiscounts(discountsData));

    const dataState = store.getState();

    return dataState;
};
