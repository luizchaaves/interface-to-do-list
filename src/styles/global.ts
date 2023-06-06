import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::after, *::before{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body, input, textarea{
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }

  html, body{
    height: 100%;
  }

  p, span{
    margin: 0px;
    padding: 0px;
  }


`;
