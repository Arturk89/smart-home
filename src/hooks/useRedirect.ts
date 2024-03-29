import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function useRedirect(
    when: string,
    redirectTo: string,
    replace?: boolean
) {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === when) {
            navigate(redirectTo, { replace })
        }
    }, [location])
}
