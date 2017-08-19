import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import { IndexPage } from './IndexPage';
<<<<<<< HEAD
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
=======
import { AthletePage } from './AthletePage';
import { NotFoundPage } from './NotFoundPage';
import athletes from '../data/athletes';

const renderIndex = () => <IndexPage athletes={athletes} />;
const renderAthlete = ({ match, staticContext }) => {
  const id = match.params.id;
  const athlete = athletes.find(current => current.id === id);
  if (!athlete) {
    return <NotFoundPage staticContext={staticContext} />;
  }

  return <AthletePage athlete={athlete} athletes={athletes} />;
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
};

export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" render={renderIndex} />
<<<<<<< HEAD
      <Route exact path="/play/:id" render={renderPlay} />
=======
      <Route exact path="/athlete/:id" render={renderAthlete} />
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
);

export default App;
