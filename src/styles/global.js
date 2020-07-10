import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *,
  *::before,
  *::after { 
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  html {
    background-color: #202329;
  }

  body {
    color: #999999;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    padding: 1rem;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul {
    list-style: none;
  }

`;