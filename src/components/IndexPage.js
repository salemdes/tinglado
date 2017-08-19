import React from 'react';
<<<<<<< HEAD
import { PlayPreview } from './PlayPreview';

export const IndexPage = ({ plays }) => (
  <div className="home">
    <div className="plays-selector">
      {plays.map(
        playData => <PlayPreview key={playData.id} {...playData} />,
=======
import { AthletePreview } from './AthletePreview';

export const IndexPage = ({ athletes }) => (
  <div className="home">
    <div className="athletes-selector">
      {athletes.map(
        athleteData => <AthletePreview key={athleteData.id} {...athleteData} />,
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
      )}
    </div>
  </div>
);

export default IndexPage;
