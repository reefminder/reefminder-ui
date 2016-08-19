import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import '../style/reefminder.scss';
import configureStore from './app/containers/configureStore';
import Root from './app/containers/Root';

const store = configureStore();

render(
    <Root store={ store }/>,
    document.getElementById('root')
);