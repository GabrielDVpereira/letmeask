import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 720px){
      font-size: 87.5%;
    }
  }
  
  body {
    background: ${({ theme }) => theme.colors.white.background} !important;
    -webkit-font-smoothing: antialiased; 
  }

  body, input, textarea, button {
      font-family: ${({ theme }) => theme.fonts.fontFamily}, sans-serif;
      font-weight: 400;
  }

  h1, h2, h3 ,h4 , h5 ,h5, strong {
      font-weight: 600;
  }

  a {
    color: ${({ theme }) => theme.colors.pink.dark}
  }

  button {
      cursor: pointer;
  }
    
  [disabled] {
      opacity: 0.6; 
      cursor: not-allowed;
  }
  
`;