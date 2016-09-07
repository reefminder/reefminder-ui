jest.unmock('../TabContent.jsx');

import React from 'React';
import {shallow} from 'enzyme';
import TabContent from '../TabContent.jsx';

describe('TabContent', () => {

    it('should render a TabContent without children with the default style', () => {
        const wrapper = shallow(<TabContent/>);
        expect(wrapper.find('.tab-content-container').length).toEqual(1);
        expect(wrapper.find('.tab-content-default').length).toEqual(1);
    });

    it('should render a TabContent without children with the specified style', () => {
        const wrapper = shallow(<TabContent color="red"/>);
        expect(wrapper.find('.tab-content-container').length).toEqual(1);
        expect(wrapper.find('.tab-content-red').length).toEqual(1);
    });

    it('should render a TabContent with given child content', () => {
        const wrapper = shallow(<TabContent>Some Content</TabContent>);
        expect(wrapper.find('.tab-content-container').length).toEqual(1);
        expect(wrapper.contains('Some Content')).toEqual(true);
    });

});