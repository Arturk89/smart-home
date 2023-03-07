import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider } from '@mantine/core'
import { mantineTheme } from 'constants/mantineTheme'
// commenting out the tailwind library
// import 'tailwindcss/tailwind.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
)
