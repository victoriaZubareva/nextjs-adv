/* Core */
import { Provider } from 'react-redux';

/* Instruments */
import '../styles/globals.css';
import { useStore } from '../init/store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
