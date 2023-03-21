import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider, createEmotionCache } from '@mantine/core'
import { globalTheme } from 'theme/global'
import 'tailwindcss/tailwind.css'
import './index.css'

const emotionCache = createEmotionCache({
    key: 'mantine',
    prepend: false
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <MantineProvider
            emotionCache={emotionCache}
            withGlobalStyles
            withNormalizeCSS
            theme={globalTheme}>
            <App />
        </MantineProvider>
    </React.StrictMode>
)
