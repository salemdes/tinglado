import React from 'react';
import { Link } from 'react-router-dom';

export const TheatrePlayPreview = props => (
  <Link to={`/theatrePlay/${props.id}`}>
    <div className="theatrePlay-preview">
      <img src={`img/${props.image}`} alt={`${props.name}`} />
      <h2 className="name">{props.name}</h2>
      <span className="awards-count">
        <img src="/img/award.png" alt="Award icon" /> {props.awards.length}
      </span>
    </div>
  </Link>
);

export default TheatrePlayPreview;
