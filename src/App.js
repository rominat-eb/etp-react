import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import ConnectedStepper from './containers/ConnectedStepper';
import ConnectedListEventBox from './containers/ConnectedListEventBox';

import reducers from './reducers';

let data = require ('./data/eventsData');

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._store = createStore(
            reducers,
            {events: data.data.events},
            composeWithDevTools(
                applyMiddleware(...[thunk], createLogger({collapsed: true})),
            ),
        );
    }
    render() {
        return (
            <Provider store={this._store}>
               <div>
                    <ConnectedStepper />
                    <ConnectedListEventBox />
               </div>
           </Provider>
        );
    }
}