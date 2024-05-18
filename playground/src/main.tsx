import React from 'react';
import ReactDOM from 'react-dom/client';

import { Background, BorderLinearProgress, Card, Chip, Core, Lib, SignInForm, SmileyRating, Theme } from '@amber/component-library';

import './main.css';

const TestFetchComponent = () => {
  const { data, error, isLoading } = Lib.useFetch({url: 'https://jsonplaceholder.typicode.com/todos/1'});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (data) return <div>{data.title}</div>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme.Provider mode="dark">
      <Background.Surface>
        <Background.ContourMapSVG size={1000}/>
      </Background.Surface>
      <Core.Container maxWidth="sm">
      <Core.Typography variant="p" sx={{ mt: 10, mb: 2 }}>
        <TestFetchComponent/>
      </Core.Typography>

      <BorderLinearProgress sx={{
            mt: 10,
            mb: 2
          }} value={80}/>

        <Chip label="Chip info" color="info" variant="outlined-low-fill" sx={{ mr: 1, mb:1}}/>
        <Chip label="Chip warning" color="warning" variant="outlined-low-fill" sx={{ mr: 1, mb:1}}/>
        <Chip label="Chip error" color="error" variant="outlined-low-fill" sx={{ mr: 1, mb:1}}/>
        <br/>

        <Chip label="Chip success" color="success" variant="outlined-low-fill" isSquare sx={{ mr: 1, mb:2}}/>
        <Chip label="Chip primary" color="primary" variant="outlined-low-fill" isSquare sx={{ mr: 1, mb:2}}/>
        <Chip label="Chip secondary" color="secondary" variant="outlined-low-fill" isSquare sx={{ mr: 1, mb:2}}/>

        <Card
          elevation={0.5}>
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
