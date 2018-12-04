import React from 'react';
import PropTypes from 'prop-types';

export default class EventDetailItem extends React.PureComponent {
    static propTypes = {
        textDetail: PropTypes.string
    }

    render() {
        let {
            textDetail
        } = this.props

        return(
            <div>{textDetail}</div>
        );
    }
}