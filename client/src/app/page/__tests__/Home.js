jest.unmock('../Home');

import React from 'react';
import ReactDOM from 'react-dom';
import sd from 'skin-deep';

var Home = require('../Home').default.WrappedComponent;

describe('Home', () => {

    let tree, vdom;

    beforeEach(() => {
        tree = sd.shallowRender(<Home/>);
        vdom = tree.getRenderOutput();
    });

    it('renders a Home Page with a Header', () => {
        expect(vdom.type).toEqual('nav');
        expect(vdom.props.class).toEqual('navbar navbar-light bg-faded');
    });
});