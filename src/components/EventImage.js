import React from 'react';
import PropTypes from 'prop-types';

export default class EventImage extends React.PureComponent {
    render() {
        const {
            src,
            alt
        } = this.props;

        return (
            <img src={src} alt={alt} />
        );
    }
}