jest.unmock('../Home');

import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';

var Home = require('../Home').default.WrappedComponent;

describe('Home', () => {

    let renderWrapper;

    beforeEach(() => {
        renderWrapper = render(<Home />);
    });

    it('renders a Navbar', () => {
        expect(renderWrapper.find('Header').length).toEqual(1);
    });

});