import React from 'react';
import { Link } from 'react-router-dom';
import { PlaysMenu } from './PlaysMenu';

export const PlayPage = ({ play, plays }) => {
  const headerStyle = { backgroundImage: `url(/img/${play.cover})` };
  return (
    <div className="play-full">
      <PlaysMenu plays={plays} />
      <div className="play">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${play.name}'s profile`} src={`/img/${play.image}`} />
          <h2 className="name">{play.name}</h2>
        </div>
      </div>
      <div className="navigateBack">
        <Link to="/">« Back to the index</Link>
      </div>
    </div>
  );
};

export default PlayPage;
