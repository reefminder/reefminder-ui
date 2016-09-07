jest.unmock('../Tab');

import React from 'React';
import { mount } from 'enzyme';
import Tab from '../Tab.jsx';

describe('Tab', () => {

    let wrapper, mockedTabClick;

    const getDefaultWrapper = (props) => {
        return mount(<Tab title={"im a title"} tabClick={ mockedTabClick } {...props} />);
    };

    beforeEach(() => {
        mockedTabClick = jest.fn();
    });

    it('should display a single tab on the tab bar', () => {
        wrapper = getDefaultWrapper();
        expect(wrapper.find('.tab').length).toEqual(1);
        expect(wrapper.find('Avatar').length).toEqual(1);
        expect(wrapper.find('.tab-title-text').text()).toEqual(" im a title ");
    });

    it('should display user defined tab title', () => {
        wrapper = getDefaultWrapper({isActive: "false"});
        expect(wrapper.find('.tab-title-text').text()).toEqual(" im a title ");
    });

    it('should invoke a given callback function whenever the tab is clicked', () => {
        wrapper = getDefaultWrapper({isActive: "false"});
        wrapper.find('div').at(1).simulate('click');
        expect(mockedTabClick).toBeCalled();
    });

});