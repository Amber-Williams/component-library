import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppThemeProvider, Background, Card, Core, SignInForm } from '@amber/component-library';

import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider mode="light">
      <Background.Surface>
        <Background.ContourMapSVG size={1000} />
      </Background.Surface>
      <Core.Container maxWidth="sm">
        <Card
          sx={{
            mt: 10,
          }}
        >
          <SignInForm />
        </Card>
      </Core.Container>
    </AppThemeProvider>
  </React.StrictMode>,
);
