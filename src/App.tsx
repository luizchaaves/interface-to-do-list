import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';
import DarkTHeme from './styles/darkTheme';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTHeme : Theme}>
      app
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
