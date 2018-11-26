import React from 'react';
import EventImage from './EventImage';
import EventDetails from './EventDetails';
import EventFloatTitle from './EventFloatTitle';

export default class EventBox extends React.PureComponent {
    static propTypes = {
        event: React.propTypes.Object //NO ME GUSTA ESTO!!
    };

    render() {
        let {event} = this.props;

        return (
            <div class="event-box">
                <aside>
                    <div>
                        <EventFloatTitle />
                    </div>
                    <div class="event-box__img">
                        <EventImage src={event.image.original.url} alt={event.name}/>
                    </div>
                </aside>

                <main class="event-box__right_side_info">
                    <EventDetails />
                </main>
            </div>
        );
    }
}