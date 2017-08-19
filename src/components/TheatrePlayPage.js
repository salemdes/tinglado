import React from 'react';
import { Link } from 'react-router-dom';
import { TheatrePlaysMenu } from './TheatrePlaysMenu';
import { Award } from './Award';
import { Flag } from './Flag';

export const TheatrePlayPage = ({ theatrePlay, theatrePlays }) => {
  const headerStyle = { backgroundImage: `url(/img/${theatrePlay.cover})` };
  return (
    <div className="theatrePlay-full">
      <TheatrePlaysMenu theatrePlays={theatrePlays} />
      <div className="theatrePlay">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${theatrePlay.name}`} src={`/img/${theatrePlay.image}`} />
          <h2 className="name">{theatrePlay.name}</h2>
        </div>
        <section className="description">{theatrePlay.description}</section>
        <section className="awards">
          <p>Winner of <strong>{theatrePlay.awards.length}</strong> awards:</p>
          <ul>{
            theatrePlay.awards.map(award => <Award key={award.id} {...award} />)
          }</ul>
        </section>
      </div>
      <div className="navigateBack">
        <Link to="/">« Back to the index</Link>
      </div>
    </div>
  );
};

export default TheatrePlayPage;
