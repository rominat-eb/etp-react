import eventbrite from 'eventbrite';
import {OATH_TOKEN} from '../data/keys';

export const SEARCH = 'search';
export const search = (term) => (
    (dispatch) => {
        // Create configured Eventbrite SDK
        const sdk = eventbrite({
            token: OATH_TOKEN,
            baseUrl: 'https://www.evbqaapi.com/v3',
        });

        const eventsUrl = `/destination/search/`;

        sdk.request(
            eventsUrl,
            {
                method: 'POST',
                body: JSON.stringify({
                    event_search: {
                        q: term.searchEvent,  // search by name
                        price: "free", // any price
                        dates: ["this_month"],  // date
                        tags: [
                            category, // category
                            "EventbriteFormat/5",  // event type
                        ],
                    },
                    page_size: 50,
                    'expand.destination_event': [
                        "primary_venue",
                        "image",
                        "ticket_availability",
                    ]
                }),
            }
        ).then(res => {
            dispatch({type: 'UPDATE_EVENTS', payload: events});
        })
        .catch(error => {
            console.log("Error");
        });
    }
);
