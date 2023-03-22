import { mailRegex } from 'config/regex'
import { useForm } from '@mantine/form'
import { userState } from 'slices/userSlice'
import { setLoggedUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxTools'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathNames } from 'routes/routes'
import { LoginPlainInputs } from './components/PlainInputs.component'

export type LoginForm = {
    email: string
    password: string
}

export function PlainInputs() {
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userState)
    const navigate = useNavigate()
    const { DASHBOARD } = pathNames

    const form = useForm<LoginForm>({
        initialValues: { email: '', password: '' },
        validate: {
            email: (value) => (mailRegex.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 2 ? 'Invalid password' : null)
        },
        clearInputErrorOnChange: true
    })

    const submitLogin = (data: LoginForm) =>
        dispatch(setLoggedUser({ id: 'nanana', name: data.email }))

    useEffect(() => {
        if (user) {
            navigate(DASHBOARD.path, { replace: true })
        }
    }, [user])

    return <LoginPlainInputs form={form} submitLogin={submitLogin} />
}
