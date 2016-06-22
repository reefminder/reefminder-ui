jest.unmock('../Header');

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import Avatar from 'react-toolbox/lib/avatar/Avatar';
import Header from '../Header.jsx';

describe('Header', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header/>);
    });

    it('renders an AppBar', () => {
        expect(wrapper.find(AppBar).length).toEqual(1);
        console.log(wrapper.find(AppBar).props());
    });

    it('renders a Navbar brand', () => {
        //expect(wrapper.text()).toEqual('ReefMinder');
        //expect(wrapper.find('.navbar-brand').length).toEqual(1);
    });
});