import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import ConnectedStepper from './containers/ConnectedStepper';
import ConnectedListEventBox from './containers/ConnectedListEventBox';
import ConnectedSearchForm from './containers/ConnectedSearchForm';
import ConnectedSearchAPIForm from './containers/ConnectedListAPIEventBox';

//import ./reducers/index.js
//si hay mas reducers, tienen q ser combinados en ese archivo
import reducers from './reducers';

let data = require ('./data/eventsData');

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._store = createStore(
            reducers,
            {events: data.data.events}, //initial state
            composeWithDevTools(
                applyMiddleware(...[thunk], createLogger({collapsed: true})),
            ),
        );
    }
    render() {
        let container = <ConnectedSearchAPIForm />

        return (
            <Provider store={this._store}>
               <div>
                    {container}
                    {
                    //<ConnectedStepper />
                    }
                    {<ConnectedListEventBox />}
               </div>
           </Provider>
        );
    }
}