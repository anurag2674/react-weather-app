import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import LoaderContextProvider from './common/LoaderContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoaderContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LoaderContextProvider>
  </StrictMode>
);
