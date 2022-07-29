import { createGlobalStyle } from 'styled-components'
import Pirulen from "./fonts/pirulen.ttf"

export default createGlobalStyle`
    @font-face {
      font-family: 'Pirulen';
      src: url(${Pirulen}) format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    color: rgb(166, 166, 166);
    overflow: hidden;
    letter-spacing: 2px;
  }
`