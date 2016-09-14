import React from 'react';
import Tabs from '../Tabs.jsx';
import Tab from '../Tab.jsx';
import TabContent from '../TabContent.jsx';
import { mount } from 'enzyme';

describe('Tabs', () => {

    let wrapper;

    it('should clone nested react elements and inject properties', () => {
        wrapper = mount(<Tabs>
            <Tab></Tab>
        </Tabs>);
        expect(wrapper.find('Tab').props().tabClick).toBeDefined();
        expect(wrapper.find('Tab').props().isActive).toBe(false);
        expect(wrapper.find('Tab').props().id).toBe(0);
    });

    it('should nest components', () => {
        wrapper = mount(<Tabs>
            <Tab>
                <TabContent>Some Content</TabContent>
            </Tab>
            <Tab>
                <TabContent>Some more Content</TabContent>
            </Tab>
        </Tabs>);
        const tabWrapper = wrapper.find('Tab');
        expect(wrapper.find('Tab').length).toBe(2);
        expect(tabWrapper.at(0).props().children.props.children).toBe('Some Content');
        expect(tabWrapper.at(1).props().children.props.children).toBe('Some more Content');
    });

});