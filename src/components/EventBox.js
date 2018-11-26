import React from 'react';
import EventImage from './EventImage';
import EventDetails from './EventDetails';
import EventFloatTitle from './EventFloatTitle';

export default class EventBox extends React.PureComponent {
    render() {
        let {
            image_url,
            event_name
        } = this.props;

        return (
            <div class="event-box">
                <aside>
                    <div>
                        <EventFloatTitle />
                    </div>
                    <div class="event-box__img">
                        <EventImage src={image_url} alt={event_name}/>
                    </div>
                </aside>

                <main class="event-box__right_side_info">
                    <EventDetails />
                </main>
            </div>
        );
    }
}