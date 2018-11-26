import React from 'react';

export default class EventImage extends React.PureComponent {
    render() {
        let {src, alt} = this.props;

        return (
            <img src={src} alt={alt} />
        );
    }
}