import React from 'react';
import ReactDOM from 'react-dom/client';

import { Background, Card, Core, SignInForm, Theme } from '@amber/component-library';

import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme.Provider mode="dark">
      <Background.Surface>
        <Background.ContourMapSVG size={1000}/>
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
    </Theme.Provider>
  </React.StrictMode>,
);
