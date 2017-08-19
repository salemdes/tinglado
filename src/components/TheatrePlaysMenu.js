import React from 'react';
import { Route, Link } from 'react-router-dom';

const shortName = (fullname) => {
  const [name, surname] = fullname.split(' ');
  return `${name[0]}. ${surname}`;
};

const TheatrePlayMenuLink = ({ id, to, label }) => (
  <Route path={`/theatrePlay/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const TheatrePlaysMenu = ({ theatrePlays }) => (
  <nav className="theatrePlays-menu">
    {
      theatrePlays.map(theatrePlay =>
        <TheatrePlayMenuLink key={theatrePlay.id} id={theatrePlay.id} to={`/theatrePlay/${theatrePlay.id}`} label={shortName(theatrePlay.name)} />,
      )
    }
  </nav>
);

export default TheatrePlaysMenu;
