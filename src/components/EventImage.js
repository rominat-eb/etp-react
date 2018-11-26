import React from 'react';

export default class EventImage extends React.PureComponent {
    static propTypes = {
        src: React.PropTypes.string,
        alt: React.PropTypes.string
    }

    render() {
        let {src, alt} = this.props;

        return (
            <img src={src} alt={alt} />
        );
    }
}