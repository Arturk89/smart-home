import { MantineThemeOverride } from '@mantine/core'

export const mantineTheme: MantineThemeOverride = {
    colorScheme: 'light',
    focusRing: 'never',
    defaultRadius: 'md',
    white: 'rgba(255,254,255,255)',
    black: 'rgba(15,14,15,255)',
    fontFamily: 'Martel Sans, Montserrat, sans-serif',
    primaryShade: {
        light: 5,
        dark: 9
    },
    colors: {
        gray: [
            '#e9ebee',
            '#e5e9eb',
            '#C0C6C9',
            '#dfe3e6',
            '#dfe3e6',
            '#c9cccf',
            '#b2b6b8',
            '#9c9fa1',
            '#86888a',
            '#707273'
        ]
    },
    primaryColor: 'gray',
    lineHeight: 2,
    fontSizes: {
        xs: '0.6rem',
        sm: '0.8rem',
        md: '1rem',
        lg: '2rem',
        xl: '3rem'
    },
    radius: {
        xs: '0.2rem',
        sm: '0.4rem',
        md: '0.8rem',
        lg: '1.6rem',
        xl: '3.2rem'
    },
    loader: 'oval',
    spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '8rem'
    }
}
