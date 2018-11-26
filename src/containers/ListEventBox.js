import React from 'react';
import EventBox from '../components/EventBox';

import data from '../data/eventsData';

export default class ListEventBox extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            events: data.events
        };
    }

    render() {
        return (
            <div>
                {this.state.events.map(event => {
                    <EventBox event={event}/>
                })}
            </div>
        );
    }
}