import { Box, Button, TextInput, Title } from '@mantine/core'
import { inputs } from '../constants/inputs'
import { UseFormReturnType } from '@mantine/form'
import { LoginForm } from '../PlainInputs.service'

type Props = {
    form: UseFormReturnType<LoginForm>
    submitLogin: (data: LoginForm) => void
}

export function LoginPlainInputs({ form, submitLogin }: Props) {
    return (
        <Box className="border rounded-lg px-6 py-8">
            <form
                onSubmit={form.onSubmit(submitLogin)}
                className="flex flex-col gap-10 text-title">
                <Title order={1}>Log in to your account</Title>
                <Box className="flex flex-col gap-6">
                    {inputs.map((field) => (
                        <TextInput
                            key={field.name}
                            label={field.label}
                            withAsterisk={field.required}
                            {...form.getInputProps(field.name)}
                        />
                    ))}
                </Box>
                <Box className="flex gap-6 justify-end">
                    <Button variant="outline">Log in with PIN</Button>
                    <Button variant="gradient" type="submit">
                        Log in
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
