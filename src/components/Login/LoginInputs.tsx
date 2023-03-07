import { Button, Text, Title, Box, TextInput } from '@mantine/core'
import { mailRegex } from 'config/regex'
import { useForm } from '@mantine/form'
import { inputs } from './constants/inputs'

export function LoginInputs() {
    const form = useForm({
        initialValues: { email: '', password: '' },

        validate: {
            email: (value) => (mailRegex.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 2 ? 'Invalid password' : null)
        }
    })

    return (
        <Box>
            <form onSubmit={form.onSubmit(console.log)}>
                <Title order={1}>Log in to your account</Title>
                {inputs.map((field) => (
                    <TextInput
                        key={field.name}
                        label={field.label}
                        withAsterisk={field.required}
                        {...form.getInputProps(field.name)}
                    />
                ))}
                <Button type="submit">
                    <Text color="black">Log in</Text>
                </Button>
            </form>
        </Box>
    )
}
