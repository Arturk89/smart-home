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
            }),
            round: (theme: MantineTheme) => ({
                root: {
                    borderRadius: '50%',
                    border: '1px solid',
                    borderColor: theme.colors.gray[2],
                    aspectRatio: '1/1',
                    padding: '.5rem'
                }
            })
        }
    }
}
