/* Core */
import nookies from 'nookies';

/* Components */
import {
    Cars, Discounts, Guardian, Menu, News,
} from '../components';

/* Instruments */
import { USER_TYPES } from '../constants';
import { destroyTmpStatus } from '../helpers/destroyTmpStatus';

/* Other */
import { initializeStore } from '../init/store';
import { initialDispatcher } from '../init/initialDispatcher';
import { initialDataDispatcher } from '../init/initialDataDispatcher';
import { getUpdatedState } from '../init/getUpdatedState';


const Dashboard = () => (
    <>
        <Menu />
        <section className='container'>
            <Guardian minRole={USER_TYPES.GUEST}>
                <News title='🗞 Новости' />
            </Guardian>
            <Guardian minRole={USER_TYPES.FRIEND}>
                <Discounts title='📉 Скидки' />
            </Guardian>
            <Guardian minRole={USER_TYPES.FAMILY_MEMBER}>
                <Cars title='🏎 Тачки' />
            </Guardian>
        </section>
    </>
);

export const getServerSideProps = async (context) => {
    const tmpStatus = Boolean(nookies.get(context).tempStatus);
    const store = await initialDispatcher(context, initializeStore());
    const dataState = await initialDataDispatcher(store, tmpStatus);
    const state = store.getState();
    const initialReduxState = getUpdatedState(state, dataState, tmpStatus);

    destroyTmpStatus(context);

    return {
        props: {
            initialReduxState,
        },
    };
};

export default Dashboard;