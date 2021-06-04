/* Core */
import nookies from 'nookies';

// Components
import { Menu, User } from '../components';

/* Instruments */
import { destroyTmpStatus } from '../helpers/destroyTmpStatus';

/* Other */
import { initializeStore } from '../init/store';
import { initialDispatcher } from '../init/initialDispatcher';
import { getUpdatedState } from '../init/getUpdatedState';

const UserPage = () => (
    <>
        <Menu />
        <User />
    </>
);

export const getServerSideProps = async (context) => {
    const tmpStatus = Boolean(nookies.get(context).tempStatus);
    const store = await initialDispatcher(context, initializeStore(), tmpStatus);
    const state = store.getState();
    const initialReduxState = getUpdatedState(state, {}, tmpStatus);

    destroyTmpStatus(context);

    return {
        props: {
            initialReduxState,
        },
    };
};


export default UserPage;
