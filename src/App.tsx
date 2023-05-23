import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyle from './styles/global';
import Theme from './styles/theme';
import DarkTHeme from './styles/darkTheme';
import { Container } from './styles';

import Menu from './components/Menu';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const mobile = false;

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTHeme : Theme}>
      <BrowserRouter>
        <Container>
          <Menu />
          <Routes mobile={mobile} />
        </Container>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
