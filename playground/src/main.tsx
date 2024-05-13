import React from 'react';
import ReactDOM from 'react-dom/client';

import { Background, Card, Core, SignInForm, SmileyRating, Theme } from '@amber/component-library';

import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme.Provider mode="dark">
      <Background.Surface>
        <Background.ContourMapSVG size={1000}/>
      </Background.Surface>
      <Core.Container maxWidth="sm">
        <Card
          elevation={0.5}
          sx={{
            mt: 10,
          }}
        >
          <SignInForm />
        </Card>
        <SmileyRating
          sx={{
            mt: 10,
            mx: 25,
          }}
          onChange={(e, value) => {console.log(value)}}
          />
      </Core.Container>
    </Theme.Provider>
  </React.StrictMode>,
);
