import React from 'react';

const MainInfo = ({ info, lastFunction }) => {
  return (
    <div style={
      {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '5%',
      }
    }>
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
      <div>
        <div style={nameStyle}>{info.firstname} {info.middlename} {info.lastname}</div>
        <div style={functionStyle}>{lastFunction}</div>
      </div>
    </div>
  );
};

export default MainInfo;

const nameStyle = {
  fontWeight: '700',
  fontSize: '1.5rem'
};
const functionStyle = {
  fontWeight: '700',
  fontSize: '1.2rem'
};
