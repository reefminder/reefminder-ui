import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from '../../app/sagas/sagas.js';

export default function configureStore(initialState) {

    const sagaMiddleware = createSagaMiddleware();
    const store =  createStore(rootReducer, initialState, applyMiddleware(thunk, sagaMiddleware));

    sagaMiddleware.run(sagas);

    return store;
}