import React from 'react';

const MainInfo = ({ info }) => {
  return (
    <div style={style}>
      I'M <span>{ info.fullname }</span>
    </div>
  );
};

export default MainInfo;

const style = {
  color: 'white',
  padding: '50px',
  fontWeight: '700',
  fontSize: '50px'
};
