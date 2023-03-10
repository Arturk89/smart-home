import { Navigate, Outlet } from 'react-router-dom'
import Background from 'components/ui/Background/Background'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { pathNames } from 'routes/routes'
import { useRedirect } from 'hooks/useRedirect'

export default function MainLayout() {
    const { ROOT, LOGIN } = pathNames
    useRedirect(ROOT.path, LOGIN.path, true)

    return (
        <Background>
            <Outlet />
        </Background>
    )
}
