import { Box, Button, Text, TextInput, Title } from '@mantine/core'
import { inputs } from '../constants/inputs'
import { UseFormReturnType } from '@mantine/form'
import { LoginForm } from '../PlainInputs.service'

type Props = {
    form: UseFormReturnType<LoginForm>
    submitLogin: (data: LoginForm) => void
}

export function LoginPlainInputs({ form, submitLogin }: Props) {
    return (
        <Box>
            <form onSubmit={form.onSubmit(submitLogin)}>
                <Title order={1}>Log in to your account</Title>
                {inputs.map((field) => (
                    <TextInput
                        key={field.name}
                        label={field.label}
                        withAsterisk={field.required}
                        {...form.getInputProps(field.name)}
                    />
                ))}
                <Box>
                    <Button type="submit">
                        <Text className="text-gray-900">Log in</Text>
                    </Button>
                    <Button>
                        <Text>Log in with PIN</Text>
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
