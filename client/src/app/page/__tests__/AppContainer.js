'use strict';

jest.unmock('./AppContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AppContainer from './AppContainer';

describe('AppContainer', () => {

    it('changes the text after click', () => {

       let shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(<AppContainer/>);
        //let vdom = shallowRenderer.getRenderOutput();

        //expect(vdom.text).toBe("Interesting information");
    });

});