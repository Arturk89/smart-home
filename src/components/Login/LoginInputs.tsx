import { Button, Text, Title, Box, TextInput } from '@mantine/core'
import { mailRegex } from 'config/regex'
import { useForm } from '@mantine/form'
import { inputs } from './constants/inputs'
import { userState } from 'slices/userSlice'
import { setLoggedUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxTools'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathNames } from 'routes/routes'

type LoginForm = {
  email: string
  password: string
}

export function LoginInputs() {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userState)
    const navigate = useNavigate()
    const { DASHBOARD } = pathNames

    const form = useForm<LoginForm>({
        initialValues: { email: '', password: '' },

        validate: {
            email: (value) => (mailRegex.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 2 ? 'Invalid password' : null)
        }
    })

    const submitLogin = (data: LoginForm) =>
      dispatch(setLoggedUser({ id: 'nanana', name: data.email }))

    useEffect(() => {
      if (user) {
        navigate(DASHBOARD.path, { replace: true })
      }
    }, [user])
      
    return (
        <Box
            // usune te sxy :P
            sx={{
                border: '2px solid #eaeaea',
                borderRadius: '5px',
                background: 'rgba(188, 196, 203, 0.75)'
            }}>
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
                <Box
                    sx={{
                        borderTop: '1px solid #fff',
                        padding: '10px'
                    }}>
                    <Button type="submit">
                        <Text color="black">Log in</Text>
                    </Button>
                    <Button>
                        <Text color="black">Log in with PIN</Text>
                    </Button>
                </Box>
            </form>
        </Box>
    )
}
