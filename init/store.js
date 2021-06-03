/* Core */
import { useMemo } from 'react';
import * as R from 'ramda';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';

/* Middleware */
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

/* Instruments */
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

let store;

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
        const logger = createLogger({
            duration: true,
            timestamp: false,
            collapsed: true,
            diff: true,
            colors: {
                title: () => '#139BFE',
                prevState: () => '#1C5FAF',
                action: () => '#149945',
                nextState: () => '#A47104',
                error: () => '#ff0005',
            },
            predicate: () => process.browser,
        });

        middleware.push(logger);
    }

    return composeWithDevTools(applyMiddleware(...middleware));
};

export const initStore = (preloadedState) => {
    const defaultState = preloadedState
        ? createStore(rootReducer).getState()
        : {};
    const currentState = R.mergeDeepRight(defaultState, preloadedState);

    const sagaMiddleware = createSagaMiddleware();
    const initedStore = createStore(
        rootReducer,
        currentState,
        bindMiddleware([sagaMiddleware]),
    );

    initedStore.sagaTask = sagaMiddleware.run(rootSaga);

    return initedStore;
};

export const initializeStore = (preloadedState = {}) => {
    let initializedStore = store || initStore(preloadedState);

    if (preloadedState && store) {
        initializedStore = initStore(
            R.mergeDeepRight(store.getState(), preloadedState),
        );

        store = undefined;
    }

    if (typeof window === 'undefined') {
        return initializedStore;
    }

    if (!store) {
        store = initializedStore;
    }

    return initializedStore;
};

export const useStore = (initialState = {}) => useMemo(() => initializeStore(initialState), [initialState]);
