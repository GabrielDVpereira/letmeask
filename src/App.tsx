
import { ThemeProvider } from 'styled-components';

import { Login } from './pages/authentication';

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  );
}

export default App;
