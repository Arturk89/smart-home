import React, { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes/routesConfig'

function App() {
    return (
        <Suspense>
            <RouterProvider router={routesConfig} />
        </Suspense>
    )
}

export default App
