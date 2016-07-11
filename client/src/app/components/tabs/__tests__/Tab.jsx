jest.unmock('../Tab.jsx');

import React from 'React';
import { render } from 'enzyme';
import Tab from '../Tab.jsx';

describe('Tab', () => {

    let wrapper;

    it('should display a single tab on the tab bar', () => {
        wrapper = render(<Tab/>);
        expect(wrapper.find('.tab').length).toEqual(1);
    });

    it('should display user defined tab title', () => {
        wrapper = render(<Tab title={"im a title"}/>);
        expect(wrapper.find('.tab').text()).toEqual("im a title");
    });

});