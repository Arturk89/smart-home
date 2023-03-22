import { Box, Button, TextInput, Title, useMantineTheme } from '@mantine/core'
import { inputs } from '../constants/inputs'
import { UseFormReturnType } from '@mantine/form'
import { LoginForm } from '../PlainInputs.service'
import { IconDialpad } from '@tabler/icons-react'

type Props = {
    form: UseFormReturnType<LoginForm>
    submitLogin: (data: LoginForm) => void
}

export function LoginPlainInputs({ form, submitLogin }: Props) {
    const theme = useMantineTheme()

    return (
        <Box className="border rounded-lg px-6 py-8">
            <form
                onSubmit={form.onSubmit(submitLogin)}
                className="flex flex-col gap-10 text-title">
                <Title order={1}>Log in to your account</Title>
                <Box className="flex flex-col gap-6">
                    {inputs.map((field) => (
                        <TextInput
                            variant="filled"
                            key={field.name}
                            type={field.type}
                            label={field.label}
                            icon={<field.icon color="gray" size={16} />}
                            withAsterisk={field.required}
                            {...form.getInputProps(field.name)}
                        />
                    ))}
                </Box>
                <Box className="flex gap-6 justify-between">
                    <Button variant="round">
                        <IconDialpad color={theme.colors.gray[2]} />
                    </Button>
                    <Button variant="gradient" type="submit">
                        Log in
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
