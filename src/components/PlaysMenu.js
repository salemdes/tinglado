import React from 'react';
import { Route, Link } from 'react-router-dom';

const shortName = (fullname) => {
  const [name] = fullname.split(' ');
  return `${name[0]}`;
};

const PlayMenuLink = ({ id, to, label }) => (
  <Route path={`/play/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const PlaysMenu = ({ plays }) => (
  <nav className="plays-menu">
    {
      plays.map(play =>
        <PlayMenuLink key={play.id} id={play.id} to={`/play/${play.id}`} label={shortName(play.name)} />,
      )
    }
  </nav>
);

export default PlaysMenu;
