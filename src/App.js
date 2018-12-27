import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';

import {getRoutes} from './routes';
import ConnectedStepper from './containers/ConnectedStepper';
import ConnectedListEventBox from './containers/ConnectedListEventBox';
import ConnectedSearchForm from './containers/ConnectedSearchForm';
import ConnectedSearchFormAPI from './containers/ConnectedSearchFormAPI';

//import ./reducers/index.js
//si hay mas reducers, tienen q ser combinados en ese archivo
import reducers from './reducers';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this._store = createStore(
            reducers,
            {}, //initial state
            composeWithDevTools(
                applyMiddleware(...[thunk], createLogger({collapsed: true}), routerMiddleware(browserHistory)),
            ),
        );

        // Create an enhanced history that syncs navigation events with the store
        this._history = syncHistoryWithStore(browserHistory, this._store);
    }
    render() {
        let container = <ConnectedSearchFormAPI />
        const routes = getRoutes();

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