import React from 'react';
import ListEventBox from '../components/ListEventBox';

let data = require ('../data/eventsData');

export default class ConnectedListEventBox extends React.PureComponent {
    render() {
        const events = data.data.events;
        return (
            <ListEventBox events={events} />
        );
    }
}