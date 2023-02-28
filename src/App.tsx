import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes/routesConfig'
import './App.css'

function App () {
  return (
    <div className="App">
      <Suspense>
        <RouterProvider router={routesConfig} />
      </Suspense>
    </div>
  )
}

export default App
