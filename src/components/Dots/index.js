import React from 'react';

import { Dot } from "./styles";

const Dots = ({times, max=5}) => {
  let dots = [];
  for (let i = 0; i < max; ++i) {
    dots.push(<Dot key={i} color={i<times ? 'default' : 'empty'}></Dot>);
  }

  return (
    <div>
      {dots}
    </div>
  )
}

export default Dots;
