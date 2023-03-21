import { rem } from '@mantine/core'

export const TitleTheme = {
    Title: {
        classNames: {
            root: 'font-medium tracking-tighter leading-tight'
        },
        styles: () => ({
            root: {
                letterSpacing: rem(-1),
                fontWeight: 300
            }
        })
    }
}
