import { createGlobalStyle } from "styled-components";
import background from "./images/background.jpg"

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    font-family: "Indie Flower", cursive;
    height: 100%;
    margin: 0:
  }
`;

export default GlobalStyle;
