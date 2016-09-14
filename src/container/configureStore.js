import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import sagas from '../../app/sagas/sagas.js';

const banner = '\n' +
    '    _/_/_/                         _/_/ _/      _/ _/                _/                  ' + '\n' +
    '   _/    _/   _/_/     _/_/     _/     _/_/  _/_/    _/_/_/     _/_/_/   _/_/   _/  _/_/ ' + '\n' +
    '  _/_/_/   _/_/_/_/ _/_/_/_/ _/_/_/_/ _/  _/  _/ _/ _/    _/ _/    _/ _/_/_/_/ _/_/      ' + '\n' +
    ' _/    _/ _/       _/         _/     _/      _/ _/ _/    _/ _/    _/ _/       _/         ' + '\n' +
    '_/    _/   _/_/_/   _/_/_/   _/     _/      _/ _/ _/    _/   _/_/_/   _/_/_/ _/          ' + '\n' +
    '' + '\n' +
    'ReefMinder Project - https://github.com/orgs/reefminder/ \n\n\n';

export default function configureStore(initialState) {

    /* eslint-disable no-console */
    console.log(banner);
    /* eslint-enable no-console */

    const sagaMiddleware = createSagaMiddleware();
    const store =  createStore(rootReducer, initialState, applyMiddleware(thunk, sagaMiddleware));

    sagaMiddleware.run(sagas);

    return store;
}