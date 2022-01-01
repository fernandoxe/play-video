import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    background: #0b0b10;
    color: #dddddd;
    font-family: 'Inria Sans', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a:link, a:visited {
    text-decoration: inherit;
    color: inherit;
  }

  button {
    outline: none;
  }
`;
