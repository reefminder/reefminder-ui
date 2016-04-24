jest.unmock('../Home');

import React from 'react';
import ReactDOM from 'react-dom';
import sd from 'skin-deep';

var Home = require('../Home').default.WrappedComponent;

describe('Home', () => {

    it('renders ', () => {
        const tree = sd.shallowRender(<Home/>);
        //expect(tree.subTree('.temp').text()).toBe('A label');
        expect(tree.findNode('Connect(Header)')).to.not.equal(false);
    });
});