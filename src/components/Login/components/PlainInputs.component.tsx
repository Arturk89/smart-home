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