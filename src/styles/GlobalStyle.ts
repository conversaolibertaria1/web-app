import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
    font-size: 16px;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    border-radius: 5px;
    padding: 10px;
    outline: none;
  }

  button {
    text-align: center;
    cursor: pointer;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;
