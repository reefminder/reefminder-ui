jest.unmock('../Header');

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

var Header = require('../Header').default.WrappedComponent;

describe('Header', () => {

    let renderWrapper;

    beforeEach(() => {
        renderWrapper = render(<Header />);
    });

    it('renders a Navbar', () => {
        expect(renderWrapper.find('nav').length).toEqual(1);
        expect(renderWrapper.find('.navbar').length).toEqual(1);
    });

    it('renders a Navbar brand', () => {
        expect(renderWrapper.text()).toEqual('ReefMinder');
        expect(renderWrapper.find('.navbar-brand').length).toEqual(1);
    });
});