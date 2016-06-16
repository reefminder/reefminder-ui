import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';
import * as reducers from './app/store/reducer/index.js';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Home from './app/page/Home.jsx';
import '../style/reefminder.scss';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk, createLogger()));

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ Home }>
                <IndexRedirect to="/home"/>
                <Route path="home" component={ Home }/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
