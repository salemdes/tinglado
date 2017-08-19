import React from 'react';

export const Award = props => (
  <li className="award">
    <span className={`symbol`}>
      <img alt={`Ganador`} src={`/img/award.png`} />
    </span>
    <span className="category">{props.category}</span>
  </li>
);

export default Award;
