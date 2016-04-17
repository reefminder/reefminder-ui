import Immutable from 'immutable';

import * as Reducers from 'app/store/reducer/';

const INITIAL_STATE = new Immutable.Map({});

export default function (state = INITIAL_STATE, action = null) {
    var newState = state;

    Object.keys(Reducers).forEach(function (key) {
        newState = newState.set(key, Reducers[key](state.get(key), action));
    });

    return newState;
}