import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import Layout from '../component/layout/Layout.jsx'
import Home from '../page/Home.jsx'
import Video from '../page/Video.jsx';

export default class Application extends React.Component {
    render() {
        const history = syncHistoryWithStore(hashHistory, this.props.store);
        return (
            <Router history={ history }>
                <Route path="/">
                    <IndexRedirect to="reefminder/home"/>
                </Route>
                <Route path="reefminder" component={ Layout }>
                    <Route path="home" component={ Home }/>
                    <Route path="video" component={Video}/>
                </Route>
            </Router>
        );
    }
}