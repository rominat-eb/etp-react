import React from 'react';
import EventDetailItem from './EventDetailItem';

export default class EventDetail extends React.PureComponent {
    render() {
        return(
            <div>
                <EventDetailItem className="event-box__right_side_info__title"/>
                <EventDetailItem className="event-box__right_side_info__extra_info" />
                <EventDetailItem className="event-box__right_side_info__extra_info" />
                <EventDetailItem className="event-box__right_side_info__extra_info" />
                <EventDetailItem className="event-box__right_side_info__extra_info" />
            </div>
        );
    }
}