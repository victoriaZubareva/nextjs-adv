/* Core */
import nookies from 'nookies';

/* Components */
import {
    Cars, Discounts, Guardian, Menu, News,
} from '../components';

/* Instruments */
import { getData } from '../helpers/getData';
import { USER_TYPES } from '../constants';
import { destroyTmpStatus } from '../helpers/destroyTmpStatus';

/* Other */
import { initializeStore } from '../init/store';
import { initialDispatcher } from '../init/initialDispatcher';

/* Selectors */
import { selectUserId, selectUserType, selectVisitCount } from '../bus/user/selectors';

const Dashboard = ({ newsData, discountsData, carsData }) => (
    <>
        <Menu />
        <section className='container'>
            <Guardian minRole={USER_TYPES.GUEST}>
                <News title='🗞 Новости' data={newsData} />
            </Guardian>
            <Guardian minRole={USER_TYPES.FRIEND}>
                <Discounts title='📉 Скидки' data={discountsData} />
            </Guardian>
            <Guardian minRole={USER_TYPES.FAMILY_MEMBER}>
                <Cars title='🏎 Тачки' data={carsData} />
            </Guardian>
        </section>
    </>
);

export const getServerSideProps = async (context) => {
    const store = await initialDispatcher(context, initializeStore());
    const state = store.getState();
    const visitCounts = selectVisitCount(state);
    const tmpStatus = Boolean(nookies.get(context).tempStatus);
    const { newsData, discountsData, carsData } = await getData(
        tmpStatus ? Number.MAX_SAFE_INTEGER : visitCounts,
    );

    destroyTmpStatus(context);

    const initialReduxState = {
        user: {
            userId: selectUserId(state),
            visitCounts,
        },
    };

    if (!tmpStatus) {
        initialReduxState.user.userType = selectUserType(state);
    }

    return {
        props: {
            newsData,
            discountsData,
            carsData,
            initialReduxState,
        },
    };
};

export default Dashboard;