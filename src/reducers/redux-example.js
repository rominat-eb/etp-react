import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


//reducer
const todos = (state = [], {type, payload}) => {
    let nextState = state;

    if (type === 'ADD_TODO') {
        nextState = [...nextState, payload];
    }

    return nextState;
};

const addTodos = () => (dispatch) => {
    dispatch({
        type: 'ADD_TODO',
        payload: 'Baz',
    });
    dispatch({
        type: 'ADD_TODO',
        payload: 'Quz',
    });
};

const myReducers = combineReducers({
   todos,
});

//dispatcher
store.dispatch({
    type: 'ADD_TODO',
    payload: 'Bar',
});



console.log(store.getState());
// ['Foo', 'Bar']
