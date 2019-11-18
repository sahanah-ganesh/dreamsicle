import { createGlobalStyle } from "styled-components"
import background from "./images/background.jpg"

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
    font-family: "Amatic SC", cursive;
    height: 100%;
    width: 100%;
    margin: 0:
  }
`

export default GlobalStyle
