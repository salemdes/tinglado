import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { TheatrePlayPage } from './TheatrePlayPage';
import { NotFoundPage } from './NotFoundPage';
import theatrePlays from '../data/theatrePlays';

const renderIndex = () => <IndexPage theatrePlays={theatrePlays} />;
const renderTheatrePlay = ({ match, staticContext }) => {
  const id = match.params.id;
  const theatrePlay = theatrePlays.find(current => current.id === id);
  if (!theatrePlay) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <TheatrePlayPage theatrePlay={theatrePlay} theatrePlays={theatrePlays} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/theatrePlay/:id" render={renderTheatrePlay} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
