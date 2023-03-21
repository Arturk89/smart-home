import {
    MantineColor,
    MantineTheme,
    MantineThemeOverride,
    rem
} from '@mantine/core'
import { componentsTheme } from './components'

export const globalTheme: MantineThemeOverride = {
    fontFamily: 'Martel Sans, Montserrat, Helvetica, sans-serif',
    headings: { fontFamily: 'Montserrat, Helvetica, sans-serif' },
    fontSizes: {
        xs: rem(12),
        sm: rem(14),
        md: rem(18),
        lg: rem(22),
        xl: rem(26)
    },
    primaryColor: 'gray' as MantineColor,
    primaryShade: 3,
    defaultGradient: { from: 'gray.1', to: 'gray.4', deg: 315 },
    breakpoints: {
        xs: '0px',
        sm: '1000px',
        md: '1440px',
        lg: '1920px',
        xl: '2560px'
    },
    defaultRadius: rem(12),
    focusRingStyles: {
        styles: (theme: MantineTheme) => ({
            outline: `${rem(1)} solid ${theme.colors.gray[7]}`
        }),
        inputStyles: (theme: MantineTheme) => ({
            outline: `${rem(1)} solid ${theme.colors.gray[7]}`
        })
    },
    loader: 'dots',
    activeStyles: {
        transform: 'scale(0.95)'
    },
    components: componentsTheme
}
