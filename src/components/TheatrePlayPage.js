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
        {theatrePlay.warning && 
          <div className="warning">{theatrePlay.warning}</div>
        }
        <div className="short-description">{theatrePlay.description.short}</div>
        <section className="info">
          <section className="description info-column">{theatrePlay.description.full}</section>
          <section className="details info-column">
            <ul>
              <li>Precio: {theatrePlay.price}</li>
              <li>Duracion: {theatrePlay.duration}'</li>
              <li>Género: {theatrePlay.genre}</li>
              <li>Horarios:
                <ul>{
                  theatrePlay.dates.map(date => <li>{date.day} - {date.time}</li>)
                }</ul>
              </li>
            </ul>
          </section>
        </section>
        <section className="awards">
          <p>Ganador de <strong>{theatrePlay.awards.length}</strong> categorias:</p>
          <ul>{
            theatrePlay.awards.map(award => <Award key={award.id} {...award} />)
          }</ul>
        </section>
        <section className="nominations">
          <p>Nominado en <strong>{theatrePlay.nominations.length}</strong> categorias:</p>
          <ul>{
            theatrePlay.nominations.map(nomination => <Award key={nomination.id} {...nomination} />)
          }</ul>
        </section>
        <section className="cast-and-creative">
          <section className="cast info-column">
            <h2>Elenco</h2>
            <ul>{
              theatrePlay.cast.map(cast => <li><div className="left">{cast.character}</div><div className="right">{cast.actor}</div></li>)
            }</ul>
          </section>
          <section className="creative info-column">
            <h2>Realizadores</h2>
            <ul>{
              theatrePlay.creative.map(creative => <li><div className="left">{creative.role}</div><div className="right">{creative.name}</div></li>)
            }</ul>
          </section>
        </section>
      </div>
      <div className="navigateBack">
        <Link to="/">« Back to the index</Link>
      </div>
    </div>
  );
};

export default TheatrePlayPage;
