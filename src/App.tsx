import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyle from './styles/global';
import Theme from './styles/theme';
import DarkTHeme from './styles/darkTheme';
import { Container } from './styles';

import Menu from './components/Menu';
import useMedia from './hooks/useMedia';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const mobile = useMedia('(max-width: 600px)');

  useEffect(() => {
    setIsDarkTheme(false);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTHeme : Theme}>
      <BrowserRouter>
        <Container>
          {!mobile && <Menu />}
          <Routes mobile={mobile} />
        </Container>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
