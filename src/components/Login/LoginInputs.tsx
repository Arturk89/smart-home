import React from 'react'
import { TextInput, Button, Text } from '@mantine/core'
import { mailRegex } from 'config/regex'
import { useForm } from '@mantine/form'

const authInputs = [
    {
        name: 'email',
        label: 'e-mail',
        required: true
    },
    {
        name: 'password',
        label: 'password',
        required: true
    }
]
export function LoginInputs() {
    const form = useForm({
        initialValues: { email: '', password: '' },

        validate: {
            email: (value) => (mailRegex.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 2 ? 'Invalid password' : null)
        }
    })

    return (
        <div style={{ padding: '2rem', width: '300px', textAlign: 'left' }}>
            <form onSubmit={form.onSubmit(console.log)}>
                {authInputs.map((field) => (
                    <React.Fragment key={field.name}>
                        <TextInput
                            label={field.label}
                            withAsterisk={field.required}
                            {...form.getInputProps(field.name)}
                        />
                    </React.Fragment>
                ))}
                <Button type="submit">
                    <Text color="black">Log in</Text>
                </Button>
            </form>
        </div>
    )
}
