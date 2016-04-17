import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from 'app/DevTools';
import history from 'app/History';
import store from 'app/store/Store';
import routes from 'app/Routes';

function renderDevTools() {
    const container = document.createElement('DIV');
    document.body.appendChild(container);

    ReactDOM.render(<DevTools store={store}/>, container);
}

export default {
    run() {
        ReactDOM.render(
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>,
            document.getElementById('application')
        );

        if (DEVELOPMENT_MODE) {
            renderDevTools();
        }
    }
};