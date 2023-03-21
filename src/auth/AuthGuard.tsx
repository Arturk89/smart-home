import { useLocation } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { pathNames } from '../routes/routes'
import { useSelector } from 'react-redux'
import { userState } from 'slices/userSlice'

export default function AuthGuard({ children }: { children: JSX.Element }) {
    const { LOGIN } = pathNames
    const { user } = useSelector(userState)

    if (!user) {
       return <Navigate to={LOGIN.path} replace />
    }

    return children
}
