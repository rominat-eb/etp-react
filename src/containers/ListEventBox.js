import React from 'react';
import EventBox from '../components/EventBox';

let data = require ('../data/eventsData');


export default class ListEventBox extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            events: data.data.events
        };
    }

    render() {
        return (
            <div>
                {this.state.events.map(event => {
                    <EventBox
                        image_url={event.image.url}
                        event_name={event.name}
                    />
                })}
            </div>
        );
    }
}