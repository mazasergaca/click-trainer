import { createGlobalStyle } from "styled-components";

export const GLobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* html {
    overflow-y: scroll;
  } */
  body {
    font-size: 12px;
    line-height: 1.33;
   background-color: #000;
    color: #fff;
  
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
  }
`;
