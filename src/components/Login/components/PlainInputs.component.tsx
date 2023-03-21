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
        <Box className="border-2 border-slate-300 rounded-lg px-5 py-10">
            <form
                onSubmit={form.onSubmit(submitLogin)}
                className="flex flex-col gap-10">
                <Title
                    className="font-light text-slate-100 text-left"
                    order={1}>
                    Log in to your account
                </Title>
                <Box className="flex flex-col gap-5">
                    {inputs.map((field) => (
                        <TextInput
                            key={field.name}
                            label={field.label}
                            withAsterisk={field.required}
                            {...form.getInputProps(field.name)}
                        />
                    ))}
                </Box>
                <Box className="flex gap-5 justify-end">
                    <Button type="submit">
                        <Text>Log in</Text>
                    </Button>
                    <Button>
                        <Text>Log in with PIN</Text>
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
