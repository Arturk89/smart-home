import { AnimatePresence } from 'framer-motion'
import { LoginWrapper } from 'components/Login/components/LoginWrapper.component'
import { PlainInputs } from 'components/Login/PlainInputs.service'
import { useAppSelector } from 'hooks/reduxTools'
import { loginState } from 'slices/loginSlice'
import { PinInputs } from 'components/Login/components/PinInputs.component'

export default function Login() {
    const { pinLogin } = useAppSelector(loginState)

    return (
        <LoginWrapper>
            <AnimatePresence mode="wait">
                {pinLogin ? <PinInputs /> : <PlainInputs />}
            </AnimatePresence>
        </LoginWrapper>
    )
}
