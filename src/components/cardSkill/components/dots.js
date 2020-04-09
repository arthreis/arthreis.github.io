import React from 'react';

import { Dot } from "./styles";

const Dots = ({times}) => {
  let dots = [];
  for (let i = 0; i < times; ++i) {
    dots.push(<Dot key={i}></Dot>);
  }

  return (
    <div>
      {dots}
    </div>
  )
}

export default Dots;
