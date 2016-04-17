import React from 'react';
import { Route, IndexRoute } from 'react-router';

import store from 'app/store/Store';
import * as Pages from 'app/page/';

export default (
    <Route path="/">
        <IndexRoute onEnter={(nextState, replace) => replace('/app/home')}/>
        <Route path="app" component={Pages.AppContainer}>
            <IndexRoute onEnter={(nextState, replace) => replace('/app/home')}/>
            <Route path="home" component={Pages.Home}/>
            <Route path="about" component={Pages.About}/>
        </Route>
        <Route path="*" component={Pages.NotFound}/>
    </Route>
);