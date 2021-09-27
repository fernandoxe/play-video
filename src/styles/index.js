import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #0b0b10;
    color: #dddddd;
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
`;
