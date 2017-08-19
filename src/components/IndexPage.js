import React from 'react';
import { PlayPreview } from './PlayPreview';

export const IndexPage = ({ plays }) => (
  <div className="home">
    <div className="plays-selector">
      {plays.map(
        playData => <PlayPreview key={playData.id} {...playData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
