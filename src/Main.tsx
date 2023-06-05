import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCss from './GlobalCSS';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalCss />
    <App />
  </React.StrictMode>
);
