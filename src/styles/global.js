import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    color: #e2e8f0;
  }

  html {
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 62.5%;
    background-color: #0a0b0e;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
    background-color: #0a0b0e;
    background-image: 
      radial-gradient(circle at 20% 30%, rgba(127, 0, 255, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 242, 254, 0.06) 0%, transparent 45%),
      linear-gradient(rgba(0, 242, 254, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 242, 254, 0.02) 1px, transparent 1px);
    background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
    background-attachment: fixed;
  }

  input, button {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  /* Custom high-tech scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(10, 11, 14, 0.5);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 242, 254, 0.15);
    border-radius: 3px;
    border: 1px solid rgba(0, 242, 254, 0.05);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 242, 254, 0.3);
    border: 1px solid rgba(0, 242, 254, 0.1);
  }
`;
