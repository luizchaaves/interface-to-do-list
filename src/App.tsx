import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { API_URL } from './services/api';
import Routes from './routes';

import GlobalStyle from './styles/global';
import Theme from './styles/theme';
import DarkTHeme from './styles/darkTheme';
import { Container } from './styles';

import Menu from './components/Menu';
import useMedia from './hooks/useMedia';
import { useAppSelector } from './hooks/hooks';

import { AppDispatch, RootState } from './store/configureStore';
import { tasksGet } from './store/tasks';
import { countTasksGet } from './store/coutTasks';
import { finishedTasksGet } from './store/finishedTasks';
import { openedTasksGet } from './store/openedTasks';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { theme } = useAppSelector((state: RootState) => state.theme);
  const mobile = useMedia('(max-width: 600px)');
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const socket = io(API_URL);
    socket.on('clearTasks', () => {
      dispatch<any>(tasksGet(undefined));
      dispatch<any>(finishedTasksGet(undefined));
      dispatch<any>(openedTasksGet(undefined));
      dispatch<any>(countTasksGet(undefined));
    });
  }, [dispatch]);

  useEffect(() => {
    setIsDarkTheme(theme === 'dark');
  }, [theme]);

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTHeme : Theme}>
      <BrowserRouter>
        <Container>
          {!mobile && <Menu mobile={mobile} />}
          <Routes mobile={mobile} />
        </Container>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
