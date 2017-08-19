import React from 'react';
import { Link } from 'react-router-dom';
import { TheatrePlaysMenu } from './TheatrePlaysMenu';
import { Medal } from './Medal';
import { Flag } from './Flag';

export const TheatrePlayPage = ({ theatrePlay, theatrePlays }) => {
  const headerStyle = { backgroundImage: `url(/img/${theatrePlay.cover})` };
  return (
    <div className="theatrePlay-full">
      <TheatrePlaysMenu theatrePlays={theatrePlays} />
      <div className="theatrePlay">
        <header style={headerStyle} />
        <div className="picture-container">
          <img alt={`${theatrePlay.name}'s profile`} src={`/img/${theatrePlay.image}`} />
          <h2 className="name">{theatrePlay.name}</h2>
        </div>
        <section className="description">
          Olympic medalist from
          &nbsp;<strong><Flag {...theatrePlay.country} showName="true" /></strong>,
          born in {theatrePlay.birth}
          (Find out more on <a href={theatrePlay.link}>Wikipedia</a>).
        </section>
        <section className="medals">
          <p>Winner of <strong>{theatrePlay.medals.length}</strong> medals:</p>
          <ul>{
            theatrePlay.medals.map(medal => <Medal key={medal.id} {...medal} />)
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
