'use strict';

jest.unmock('./About');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import About from './AppContainer';

describe('About', () => {

    it('changes the text after click', () => {

        let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<About/>);
        //let vdom = shallowRenderer.getRenderOutput();

        //expect(vdom.text).toBe("Interesting information");
    });

});