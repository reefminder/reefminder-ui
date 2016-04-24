jest.unmock('../Header');

import React from 'react';
import ReactDOM from 'react-dom';
import sd from 'skin-deep';

var Header = require('../Header').default.WrappedComponent;

describe('Header', () => {

    it('renders ', () => {
        const tree = sd.shallowRender(<Header/>);
        const vdom = tree.getRenderOutput();
        console.log(vdom.props.type);
        console.log(vdom.props.props);
        expect(vdom.props.children.text).toEqual('Navbar');
    });
});