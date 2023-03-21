 import { LoginWrapper } from 'components/Login/components/LoginWrapper.component'
 import { PlainInputs } from 'components/Login/PlainInputs.service'

 export default function Login() {
    console.log('jest login page')
    return (
        <LoginWrapper>
            <PlainInputs />
        </LoginWrapper>
    )
 }