import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import PersonsFormikProvider from '../contexts/PersonsFormProvider';
import WheelProvider from '../contexts/WheelProvider';
import GlobalCss from '../styles/GlobalCss';
import { theme } from '../styles/theme';
import App from './App';
import StyledMain from './main/StyledMain';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersonsFormikProvider>
        <WheelProvider>
          <GlobalCss />
          <StyledMain>
            <App />
          </StyledMain>
        </WheelProvider>
      </PersonsFormikProvider>
    </ThemeProvider>
  </React.StrictMode>
);
