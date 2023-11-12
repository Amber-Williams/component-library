import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppThemeProvider, Background, Card, Core, SignInForm } from '@amber/component-library';

import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider mode="light">
      <Background.ContourMapSVG size={1000} />

      <Core.Container maxWidth="sm">
        <Card>
          <SignInForm />
        </Card>
      </Core.Container>
    </AppThemeProvider>
  </React.StrictMode>,
);
