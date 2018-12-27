export const SEARCH = 'search';
export const search = (terms) => (
    (dispatch) => {
        let data = require ('../data/eventsData');
        let events = data.data.events;
        //console.log(terms);
        if (terms) {
            events = filterByName(events, terms.searchEvent);
            events = filterByEventType(events, terms.searchFormat);
            //console.log(events);
            // if (term.searchFormat) {
            //     events = events.filter((event) => event.tags.filter((tag) => tag.tag == term.searchFormat));
            // }
            // console.log(events.length);

        }

        dispatch({type: 'UPDATE_EVENTS', payload: events});
    }
);

const filterByName = (events, term) => {
    if(events && term) {
        return events.filter((event) => event.name.includes(term));
    }
    return events;
}

const filterByEventType = (events, term) => {
    if(events && term) {
        return events.filter((event) => {
            return (event.tags.length && event.tags.filter((tag) => tag.tag === term).length)
        });
    }
    return events;
}