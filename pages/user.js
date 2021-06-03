// Components
import { Menu, User } from '../components';

/* Instruments */
import { destroyTmpStatus } from '../helpers/destroyTmpStatus';

/* Other */
import { initializeStore } from '../init/store';
import { initialDispatcher } from '../init/initialDispatcher';

const UserPage = () => (
    <>
        <Menu />
        <User />
    </>
);

export const getServerSideProps = async (context) => {
    const store = await initialDispatcher(context, initializeStore());
    const initialReduxState = store.getState();

    destroyTmpStatus(context);

    return {
        props: {
            initialReduxState,
        },
    };
};

export default UserPage;
