import { useNavigate } from 'react-router-dom'
import { pathNames } from '../routes/routes'

export default function AuthGuard({ children }: { children: JSX.Element }) {
    const navigate = useNavigate()
    const { LOGIN } = pathNames

    //logic to check auth

    return children
}
