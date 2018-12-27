import React from 'react';
import PropTypes from 'prop-types';
import EventCard from 'eventbrite_design_system/eventCard/EventCard';


export default class ListEventBox extends React.PureComponent {
    static propTypes = {
        events: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            start_date: PropTypes.string.isRequired,
            start_time: PropTypes.string.isRequired,
            image: PropTypes.shape({
                url: PropTypes.string,
            }),
            ticket_availability: PropTypes.shape({
                minimum_ticket_price: PropTypes.shape ({
                    currency: PropTypes.string,
                    value: PropTypes.number,
                    major_value: PropTypes.string,
                    display: PropTypes.string,
                }),
                is_free: PropTypes.bool,
            }),
            primary_venue_with_places: PropTypes.shape({
                name: PropTypes.string,
                address: PropTypes.shape({
                    localized_address_display: PropTypes.string,
                }),
            }),
            url: PropTypes.string,
        })),
    }

    static defaultProps = {
        events: []
    }

    _getLocationInfo(primary_venue_with_places) {
        const {
            name,
            address: {
                localized_address_display
            }
        } = primary_venue_with_places;

        return [name, localized_address_display].filter(Boolean).join(', ');
    }

    _getMinPrice(minimum_ticket_price) {
        return {
            minPriceValue: minimum_ticket_price ? minimum_ticket_price.value : 0.00,
            currencyFormat: '#,##0.00',
            currency: minimum_ticket_price ? minimum_ticket_price.currency : 'USD',
        }
    }

    render() {
        const {
            events,
        } = this.props;

        const eventsBoxes = events.map(({
            id,
            image,
            primary_venue_with_places,
            ticket_availability: {
                is_free,
                minimum_ticket_price,
            },
            name,
            start_date,
            start_time,
            url,
        }) => {
            let imageUrl = image ? image.url : "https://media.tenor.com/images/2d11bfcfd249f73fbc3ce5f67ae7ebcf/tenor.png";

            return (
                <EventCard
                    id={id}
                    key={id}
                    imageUrl={imageUrl}
                    locationInfo={this._getLocationInfo(primary_venue_with_places)}
                    minPrice={this._getMinPrice(minimum_ticket_price)}
                    name={name}
                    startDate={start_date}
                    startTime={start_time}
                    type="list"
                    style="standard"
                    imageStyle="fixed"
                    isFree={is_free}
                    url={url}
                    hideSaveButton={true}
                    excludeDateThumbnail={true}
                />
            );
            }
        );

        return (
            <div>
                {eventsBoxes}
            </div>
        );
    }
}