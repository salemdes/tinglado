import React from 'react';
import { Link } from 'react-router-dom';

export const TheatrePlayPreview = props => (
  <Link to={`/theatrePlay/${props.id}`}>
    <div className="theatrePlay-preview">
      <img src={`img/${props.image}`} alt={`${props.name}`} />
      <div className="information">
        <h2 className="name">{props.name}</h2>
        <ul className="dates">
            <li>LUN 22:00</li>
            <li>MAR 19:30</li>
            <li>VIE 21:45</li>
        </ul>
      </div>
      <span className="awards-count">
        <img src="/img/award.png" alt="Award icon" /> {props.awards.length}
      </span>
    </div>
  </Link>
);

export default TheatrePlayPreview;
