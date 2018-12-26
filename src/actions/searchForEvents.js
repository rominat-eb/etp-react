export const SEARCH = 'search';
export const search = (term) => (
    (dispatch) => {
        let data = require ('../data/eventsData');
        let events = data.data.events.filter((event) => event.name.includes(term.searchEvent));

        dispatch({type: 'UPDATE_EVENTS', payload: events});
    }
);