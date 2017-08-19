import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
import { PlayPage } from './PlayPage';
import { NotFoundPage } from './NotFoundPage';
import plays from '../data/plays';

const renderIndex = () => <IndexPage plays={plays} />;
const renderPlay = ({ match, staticContext }) => {
  const id = match.params.id;
  const play = plays.find(current => current.id === id);
  if (!play) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <PlayPage play={play} plays={plays} />;
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
      <Route exact path="/play/:id" render={renderPlay} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
