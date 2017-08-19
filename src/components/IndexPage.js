import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { PlayPreview } from './PlayPreview';

export const IndexPage = ({ plays }) => (
  <div className="home">
    <div className="plays-selector">
      {plays.map(
        playData => <PlayPreview key={playData.id} {...playData} />,
=======
=======
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
=======
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
import { AthletePreview } from './AthletePreview';

export const IndexPage = ({ athletes }) => (
  <div className="home">
    <div className="athletes-selector">
      {athletes.map(
        athleteData => <AthletePreview key={athleteData.id} {...athleteData} />,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
=======
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
=======
>>>>>>> 925698b6dd729f1e9a5021f8c75507a67c202a99
      )}
    </div>
  </div>
);

export default IndexPage;
