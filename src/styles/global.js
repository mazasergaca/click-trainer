import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/images/background.png";

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
    font-family: 'Secular One', sans-serif;
   /* background: linear-gradient(90deg, #faf0cd, #fab397); */
   background-color: #000;
   background-image: url(${backgroundImage});
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
