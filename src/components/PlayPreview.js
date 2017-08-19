import React from 'react';
import { Link } from 'react-router-dom';

export const PlayPreview = props => (
  <Link to={`/play/${props.id}`}>
    <div className="play-preview">
      <img src={`img/${props.image}`} alt={`${props.name}'s profile`} />
      <h2 className="name">{props.name}</h2>
    </div>
  </Link>
);

export default PlayPreview;
