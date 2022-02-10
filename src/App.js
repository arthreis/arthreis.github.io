import React, { Fragment } from 'react';
import ReactGA from 'react-ga';

import Routes from './routes';
import GlobalStyle from './styles/global';

let TRACKING_ID = '';

if (process.env.MODE_ENV === 'staging') {
  console.log(`You're running in ${process.env.NODE_ENV} ${process.env.MODE_ENV} mode.`);
  TRACKING_ID = 'UA-197970361-3';
  ReactGA.initialize(TRACKING_ID);
} else if (process.env.NODE_ENV === 'production') {
  TRACKING_ID = 'UA-197970361-2';
  ReactGA.initialize(TRACKING_ID);
} else {
  console.log(`You're running in ${process.env.NODE_ENV} ${process.env.MODE_ENV} mode.`);
}

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes />
    </Fragment>
  );
}

export default App;
