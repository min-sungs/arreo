import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { StyledEngineProvider } from '@mui/styled-engine';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </RecoilRoot>,

);
