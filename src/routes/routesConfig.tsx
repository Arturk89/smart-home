import { createBrowserRouter } from 'react-router-dom'
import AuthGuard from '../auth/AuthGuard'
import { routes } from './routes'

export const routesConfig = createBrowserRouter([
    {
        path: routes.ROOT.path,
        element: <routes.ROOT.Component />,
        children: [
            {
                path: routes.LOGIN.path,
                element: <routes.LOGIN.Component />
            },
            {
                path: routes.HOME_PAGE.path,
                element: (
                    <AuthGuard>
                        <routes.HOME_PAGE.Component />
                    </AuthGuard>
                ),
                children: [
                    {
                        path: routes.DASHBOARD.path,
                        element: <routes.DASHBOARD.Component />
                    }
                ]
            }
        ]
    },
    {
        path: routes.PAGE_NOT_FOUND.path,
        element: <routes.PAGE_NOT_FOUND.Component />
    }
])
