/* Components */
import { Guardian, Menu, News } from '../../components';

/* Instruments */
import { USER_TYPES } from '../../constants';

/* Other */
import { initializeStore } from '../../init/store';
import { initialDispatcher } from '../../init/initialDispatcher';
import { initialDataDispatcher } from '../../init/initialDataDispatcher';
import { getUpdatedState } from '../../init/getUpdatedState';

const NewsPage = () => (
  <>
      <Menu />
      <Guardian minRole={USER_TYPES.GUEST} redirect>
          <News title='🗞 Новости' />
      </Guardian>
  </>
);

export const getServerSideProps = async (context) => {
  const store = await initialDispatcher(context, initializeStore());
  const dataState = await initialDataDispatcher(store);
  const state = store.getState();
  const initialReduxState = getUpdatedState(state, dataState);

  return {
      props: {
          initialReduxState,
      },
  };
};

export default NewsPage;