import eventbrite from 'eventbrite';
import {OAUTH_TOKEN} from './data/keys';

// Create configured Eventbrite SDK
const sdk = eventbrite({
    token: OAUTH_TOKEN,
    baseUrl: 'https://www.evbqaapi.com/v3',
});

export const searchEvents = terms => {
    const eventsUrl = `/destination/search/`;

    const eventSearch = {};
    if (terms.searchEvent) eventSearch.q = terms.searchEvent;
    if (terms.searchFormat) {
        eventSearch.master_tags = [];
        eventSearch.master_tags.push(terms.searchFormat);
    }
    eventSearch.dates = ["current_future"];

    return sdk.request(
        eventsUrl,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event_search: eventSearch,
                page_size: 50,
                'expand.destination_event': [
                    "primary_venue_with_places",
                    "image",
                    "ticket_availability",
                ]
            }),
        }
    );
}