import React from 'react';
import PropTypes from 'prop-types';
import EventImage from './EventImage';
import EventDetails from './EventDetails';
import EventFloatTitle from './EventFloatTitle';

export default class EventBox extends React.PureComponent {
    static propTypes = {
        eventName: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequiredº
    }

    render() {
        const {
            imageUrl,
            eventName,
            startDate
        } = this.props;

        return (
            <div class="event-box">
                <aside>
                    <div>
                        <EventFloatTitle />
                    </div>
                    <div class="event-box__img">
                        <EventImage src={imageUrl} alt={eventName}/>
                    </div>
                </aside>

                <main class="event-box__right_side_info">
                    <EventDetails startDate={startDate}/>
                </main>
            </div>
        );
    }
}