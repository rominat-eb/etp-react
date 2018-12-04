import React from 'react';
import PropTypes from 'prop-types';
import EventDetailItem from './EventDetailItem';

export default class EventDetail extends React.PureComponent {
    static propTypes = {
        startDate: PropTypes.string.isRequired
    }

    render() {
        const {
            startDate
        } = this.props

        return(
            <div>
                <EventDetailItem className="event-box__right_side_info__title"/>
                <EventDetailItem className="event-box__right_side_info__extra_info" textDetail={startDate}/>
                <EventDetailItem className="event-box__right_side_info__extra_info" />
                <EventDetailItem className="event-box__right_side_info__extra_info" />
                <EventDetailItem className="event-box__right_side_info__extra_info" />
            </div>
        );
    }
}