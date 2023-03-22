import { MantineTheme } from '@mantine/core'

export const TextInputTheme = {
    TextInput: {
        styles: (theme: MantineTheme) => ({
            label: {
                color: theme.colors.gray[2],
                fontWeight: 300
            },
            input: {
                lineHeight: 1,
                paddingTop: '1px'
            }
        })
    }
}
