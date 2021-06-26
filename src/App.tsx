
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from "@chakra-ui/react"


import { Login } from './pages/authentication';

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme';



function App() {
  return (
    <ChakraProvider resetCSS={false} >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Login />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
