import { reducer as formReducer } from 'redux-form'
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {
    ADD,
    SUBTRACT,
    RESET,
} from '../actions/stepper';

const number = (state = 0, {type}) => {
    let nextState = state;

    if (type === ADD) {
        nextState += 1;
    }

    if (type === SUBTRACT) {
        nextState -= 1;
    }

    if (type === RESET) {
        nextState = 0;
    }

    return nextState;
};

const events = (state = [], {type, payload}) => {
    let nextState = state;

    if (type === 'UPDATE_EVENTS') {
        nextState = payload;
    }

    return nextState;
};

export default combineReducers({
    number,
    events,
    form: formReducer,
    routing: routerReducer,
});
