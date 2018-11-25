import React from 'react';

export default class EventBox extends React.PureComponent{
    render() {
        return (
            <div className="event_box">
                <img src="../images/non_palidece.jpg" alt="Nonpalidece" className="event-box__img" />
                <div className="event-box__right_side_info">
                    <div className="event-box__right_side_info__title">Nonpalidece en 23 Ríos</div>
                    <div className="event-box__right_side_info__extra_info">
                        <div>Sun, Nov 25, 12:00pm</div>
                        <div>5269 Acceso Sur - Lateral Este, 5781, Mendoza</div>
                        <div>Free</div>
                    </div>
                </div>
            </div>
        );
    }
}