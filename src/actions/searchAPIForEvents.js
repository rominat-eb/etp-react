import {searchEvents} from '../API';

export const SEARCH = 'search';
export const search = (terms = {}) => (
    (dispatch) => {
        searchEvents(terms)
        .then(res => {
            dispatch({type: 'UPDATE_EVENTS', payload: res.events.results});
        })
        .catch(error => {
            console.log("error", error);
        });
    }
);
