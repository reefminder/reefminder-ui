jest.unmock('../Header');

import React from 'react';
import ReactDOM from 'react-dom';
import sd from 'skin-deep';

var Header = require('../Header').default.WrappedComponent;

describe('Header', () => {

    let tree, vdom;

    beforeEach(() => {
        tree = sd.shallowRender(<Header/>);
        vdom = tree.getRenderOutput();
    });

    it('renders a Navbar', () => {
        expect(vdom.type).toEqual('nav');
        expect(vdom.props.class).toEqual('navbar navbar-light bg-faded');
    });

    it('renders a Navbar brand', () => {
        expect(vdom.props.children.props.class).toEqual('navbar-brand');
        expect(vdom.props.children.props.children).toEqual('ReefMinder');
    });
});