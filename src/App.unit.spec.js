import React from 'react';
import {mount} from 'enzyme';

import App from './App';

describe('Render the main App', () => {

    it('test', () => {
        /*
        Full DOM rendering is ideal for use cases where you have components
        that may interact with DOM APIs or need to test components that are
        wrapped in higher order components.
        */
        const component = mount(
            <App />
        );

       expect(component).toMatchSnapshot();
    })


});
