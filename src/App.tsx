import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { store } from 'config/store'
import { RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes/routesConfig'

function App() {
    return (
        <Provider store={store}>
            <Suspense>
                <RouterProvider router={routesConfig} />
            </Suspense>
        </Provider>
    )
}

export default App
