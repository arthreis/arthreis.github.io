import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: #363636;
  }

  html {
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiase !important;

    background: linear-gradient(315deg, rgba(224,0,255,1) 0%, rgba(253,29,29,1) 25%, rgba(252,176,69,1) 100%);
    background: #fff;
    background: rgb(200,200,200);
  }

  input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
