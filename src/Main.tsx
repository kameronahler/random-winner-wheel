import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, { ThemeProvider } from 'styled-components';
import App from './components/App';
import GlobalCss from './styles/GlobalCss';
import theme from './styles/theme';

// eslint-disable-next-line react-refresh/only-export-components
const StyledMain = styled.main`
  background-color: ${(props) => props.theme.mainBgColor};
  height: 100%;
  padding-inline: 1rem;
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <StyledMain>
        <App />
      </StyledMain>
    </ThemeProvider>
  </React.StrictMode>
);
