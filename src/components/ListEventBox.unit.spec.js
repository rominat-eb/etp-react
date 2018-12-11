import React from 'react';
import {mount} from 'enzyme';

import ListEventBox from './ListEventBox';

const events = [{
    id: '47796618',
    name: 'CARNATAL 2018',
    start_date: '2018-12-13',
    start_time: '19:00',
    image: {
        url: 'https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F47796618%2F238672898614%2F1%2Foriginal.jpg?h=512&w=512&auto=compress&rect=0%2C0%2C2160%2C1080&s=217cb46eb42120eb2191402569a39491',
    },
    ticket_availability: {
        minimum_ticket_price: {
            currency: 'BRL',
            value: 13000,
            major_value: '130.00',
            display: '130.00 BRL'
        },
        is_free: false,
    },
    primary_venue_with_places: {
        name: 'Improv Comedy Theater & Restaurant',
        address: {
            localized_address_display: 'Natal, Rio Grande do Norte',
        },
    },
    url: 'https://www.evbqa.com.br/e/carnatal-2018-tickets-48246888743',
}];

describe('Render ListEventBox', () => {

    it('test', () => {
        /*
        Full DOM rendering is ideal for use cases where you have components
        that may interact with DOM APIs or need to test components that are
        wrapped in higher order components.
        */
        const component = mount(
            <ListEventBox events={events}/>
        );

       expect(component).toMatchSnapshot();
    })


});