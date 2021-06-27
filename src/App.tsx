
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from "@chakra-ui/react"
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme';



function App() {
  return (
    <ChakraProvider resetCSS={false} >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
