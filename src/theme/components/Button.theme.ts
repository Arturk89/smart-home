import { MantineTheme } from '@mantine/core'

export const ButtonTheme = {
    Button: {
        defaultProps: {
            radius: 'lg'
        },
        variants: {
            gradient: (theme: MantineTheme) => ({
                root: {
                    color: theme.colors.gray[9]
                }
            }),
            outline: (theme: MantineTheme) => ({
                root: {
                    color: theme.colors.gray[1]
                }
            }),
            filled: (theme: MantineTheme) => ({
                root: {
                    color: theme.colors.gray[9]
                }
            })
        }
    }
}
