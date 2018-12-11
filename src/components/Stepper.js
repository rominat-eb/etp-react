import React from 'react';
import PropTypes from 'prop-types';
import Button from 'eventbrite_design_system/button/Button';
import Icon from 'eventbrite_design_system/icon/Icon';


export default class Stepper extends React.PureComponent {
    static propTypes = {
        number: PropTypes.number.isRequired,
        add: PropTypes.func.isRequired,
        subtract: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
    }

    render() {
        const {
            number,
            add,
            subtract,
            reset,
        } = this.props;

        return (
            <div className="events-list-box">
                <div className="event-box">{number}</div>
                <div className="event-box">
                    <Button
                        style="neutral"
                        onClick={add}
                    >
                    <Icon type="plus-chunky" />
                    Add
                    </Button>
                </div>
                <div className="event-box">
                    <Button
                        style="neutral"
                        onClick={subtract}
                    >
                    <Icon type="minus-chunky" />
                    Subtract
                    </Button>
                </div>
                <div className="event-box">
                    <Button
                        style="neutral"
                        onClick={reset}
                    >
                    <Icon type="undo-circular-chunky" />
                    Reset
                    </Button>
                </div>
            </div>
        );
    }
}