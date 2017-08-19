import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header>
      <Link to="/">
        <img className="logo" src="/img/tinglado-logo.png" alt="Teatro El Tinglado" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
    </footer>
  </div>
);

export default Layout;
