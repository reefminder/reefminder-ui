jest.unmock('../TabContent');

import React from 'react';
import TabContent from '../Tabs.jsx';
import { render } from 'enzyme';

describe('TabContent', () => {

    let wrapper;

   it('should render a tab content section', () => {
       wrapper = render(<TabContent/>);
   }) ;

    it('should render some content', () => {
       wrapper = render(<TabContent>im some content</TabContent>);
    });

    it('should not render some content if the hidden flag is true', () => {
        wrapper = render(<TabContent hidden={ true }>im some content</TabContent>);
    });
});