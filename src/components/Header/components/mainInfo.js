import React from 'react';

const MainInfo = ({ info }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center',}}>
      <div>
        <img
        src={'http://1.gravatar.com/avatar/d013f72b5df113ab423e5135bbc2b802'}
        alt='profile'
        height='70px'
        width='70px'
        style={
          {
            borderRadius: 50,
            border: '5px solid',
            marginRight: '20px',
          }
        }
        />
      </div>
      <div style={style}>{info.firstname} {info.middlename} {info.lastname}</div>
    </div>
  );
};

export default MainInfo;

const style = {
  fontWeight: '700',
  fontSize: '50px'
};
