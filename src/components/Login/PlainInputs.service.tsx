import { mailRegex } from 'config/regex'
import { useForm } from '@mantine/form'
import { userState } from 'slices/userSlice'
import { setLoggedUser } from 'slices/userSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxTools'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { pathNames } from 'routes/routes'
import { LoginPlainInputs } from './components/PlainInputs.component'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

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
        }
    })

    const submitLogin = (data: LoginForm) =>
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((res) =>
                dispatch(
                    setLoggedUser({
                        id: res.user.uid,
                        name: res.user.email || ''
                    })
                )
            )
            .catch((err) => console.error(err))

    useEffect(() => {
        if (user) {
            navigate(DASHBOARD.path, { replace: true })
        }
    }, [user])

    return <LoginPlainInputs form={form} submitLogin={submitLogin} />
}
