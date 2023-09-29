import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from 'components/App';
import './index.css';
import { theme } from './constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{theme}}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
