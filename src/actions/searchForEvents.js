export const SEARCH = 'search';
export const search = (term) => (
    (dispatch) => {
        console.log(term);

        let data = require ('../data/eventsData');
        let events = data.data.events.filter((event) => event.name.includes(term.searchEvent));

        console.log(events);
        dispatch({type: 'UPDATE_EVENTS', payload: events});
    }
);