import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Box } from '@mui/material';
import { routesConfig } from './routes/routesConfig';
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense>
        <RouterProvider router={routesConfig} />
      </Suspense>
    </div>
  );
}

export default App;
