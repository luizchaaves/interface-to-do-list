import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::after, *::before{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    font-family: 'Inter', sans-serif;
  }

  html, body{
    height: 100%;
  }

  p, span{
    margin: 0px;
    padding: 0px;
  }


`;
