import React from 'react';
import { Route, IndexRoute } from 'react-router';

import store from 'app/store/Store';
import Home from 'app/page/Home';
import Video from 'app/page/Video';
import AppContainer from 'app/page/AppContainer';

export default (
    <Route path="/">
        <IndexRoute onEnter={(nextState, replace) => replace('/reefminder/home')}/>
        <Route path="reefminder" component={AppContainer}>
            <IndexRoute onEnter={(nextState, replace) => replace('/reefminder/home')}/>
            <Route path="home" component={Home}/>
            <Route path="video" component={Video}/>
           /* <Route path="about" component={Pages.About}/>*/
        </Route>
/*
        <Route path="*" component={Pages.NotFound}/>
*/
    </Route>
);