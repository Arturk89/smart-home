import { createBrowserRouter } from 'react-router-dom'
import AuthGuard from '../auth/AuthGuard'
import { routes } from './routes'

export const routesConfig = createBrowserRouter([
  {
    path: routes.LOGIN.path,
    element: <routes.LOGIN.Component />
  },
  {
    path: routes.PAGE_NOT_FOUND.path,
    element: <routes.PAGE_NOT_FOUND.Component />
  },
  {
    path: routes.HOME.path,
    element: <AuthGuard><routes.HOME.Component /></AuthGuard>,
    children: [
    ]
  }
])

