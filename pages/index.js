/* Components */
import { Menu, Message } from '../components';

/* Instruments */
import { destroyTmpStatus } from '../helpers/destroyTmpStatus';

/* Other */
import { initializeStore } from '../init/store';
import { initialDispatcher } from '../init/initialDispatcher';

const Index = () => (
    <>
        <Menu />
        <Message />
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

export default Index;
