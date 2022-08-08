import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Advent Pro', sans-serif;
  }
  body{
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    background: #68108d;
  }
`;
 
export default GlobalStyle;