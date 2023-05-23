import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Theme from './styles/theme';
import DarkTHeme from './styles/darkTheme';
import { Container } from './styles';

import Menu from './components/Menu';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTHeme : Theme}>
      <BrowserRouter>
        <Container>
          <Menu />
        </Container>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
