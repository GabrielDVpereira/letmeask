
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from "@chakra-ui/react"
import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme';
import { Modal } from 'src/components/organisms'
import modalRef from 'src/components/organisms/Modal/modalRef'

function App() {
  return (
    <ChakraProvider resetCSS={false} >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
        <Modal ref={(ref) => {
          modalRef.ref = ref
        }} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
