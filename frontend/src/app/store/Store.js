import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';

import history from 'app/History';
import DevTools from 'app/DevTools';
import reducer from 'app/store/Reducer';

let store;

const reduxRouterMiddleware = syncHistory(history);

if (DEVELOPMENT_MODE) {
    const logger = createLogger({
        stateTransformer(state) {
            return state.toJS();
        }
    });

    store = compose(
        applyMiddleware(thunkMiddleware, reduxRouterMiddleware, logger),
        DevTools.instrument()
    )(createStore)(reducer);

    // This causes an infinite loop :(
    // reduxRouterMiddleware.listenForReplays(store, state => state.get('routing'));
} else {
    store = compose(
        applyMiddleware(thunkMiddleware, reduxRouterMiddleware)
    )(createStore)(reducer);
}

export default store;