import React from 'react';
import { Route, IndexRoute } from 'react-router';

import store from 'app/store/Store';
import Home from 'app/page/Home';
import AppContainer from 'app/page/AppContainer';

export default (
    <Route path="/">
        <IndexRoute onEnter={(nextState, replace) => replace('/app/home')}/>
        <Route path="app" component={AppContainer}>
            <IndexRoute onEnter={(nextState, replace) => replace('/app/home')}/>
            <Route path="home" component={Home}/>
           /* <Route path="about" component={Pages.About}/>*/
        </Route>
/*
        <Route path="*" component={Pages.NotFound}/>
*/
    </Route>
);