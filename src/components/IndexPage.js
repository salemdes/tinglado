import React from 'react';
import { TheatrePlayPreview } from './TheatrePlayPreview';

export const IndexPage = ({ theatrePlays }) => (
  <div className="home">
    <div className="theatrePlays-selector">
      {theatrePlays.map(
        theatrePlayData => <TheatrePlayPreview key={theatrePlayData.id} {...theatrePlayData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
