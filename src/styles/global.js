import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        overflow-x: hidden;
        overflow-y: hidden;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        color: #fff;
        background: #353940;
        -webkit-font-smoothing: antialiase !important;

        background: rgb(224,0,255);
        background: linear-gradient(315deg, rgba(224,0,255,1) 0%, rgba(253,29,29,1) 25%, rgba(252,176,69,1) 100%);
    }

    ul {
        list-style: none;
    }

    input, button {
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
