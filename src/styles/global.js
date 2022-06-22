import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/images/background.png";

export const GLobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 12px;
    line-height: 1.33;
    font-family: 'Secular One', sans-serif;
   background-color: #000;
   background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.2),
      rgba(47, 48, 58, 0.4)
    ), url(${backgroundImage});
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  
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
