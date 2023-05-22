import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>
);
