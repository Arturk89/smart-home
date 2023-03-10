import { lazy } from 'react'
import { Roles } from './routes.roles'
import {
    PathNames,
    RouteObject,
    SingleRouteObject,
    UserRoleDetails
} from './routes.types'

export const pathNames: PathNames = {
    ROOT: {
        name: 'Home',
        path: '/',
        roles: [Roles.ADMIN, Roles.PUBLIC]
    },
    LOGIN: {
        name: 'Login',
        path: '/login',
        roles: [Roles.ADMIN, Roles.PUBLIC]
    },
    HOME_PAGE: {
        name: 'Home-Page',
        path: '/home',
        roles: [Roles.ADMIN, Roles.PUBLIC]
    },
    DASHBOARD: {
        name: 'Dashboard',
        path: '/home/dashboard',
        roles: [Roles.ADMIN, Roles.PUBLIC]
    },
    PAGE_NOT_FOUND: {
        name: 'Not Found',
        path: '*',
        roles: [Roles.ADMIN, Roles.PUBLIC]
    }
}

const MainLayout = lazy(() => import('layouts/MainLayout/MainLayout'))
const AuthLayout = lazy(() => import('layouts/AuthLayout/AuthLauyout'))
const Login = lazy(() => import('containers/Login/Login'))
const Home = lazy(() => import('containers/HomePage/Home'))
const Dashboard = lazy(() => import('containers/Dashboard/Dashboard'))
const PageNotFound = lazy(() => import('containers/NotFound/PageNotFound'))

function createRoute(
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    role: UserRoleDetails[],
    Component: React.ComponentType
): SingleRouteObject {
    return {
        key,
        title,
        path,
        enabled,
        Component,
        role
    }
}

function checkIfRouteEnabled(route: string) {
    // logic to checking route
    if (route) return true
    return true
}

export const routes: RouteObject = {
    LOGIN: createRoute(
        'login-route',
        pathNames.LOGIN.name,
        pathNames.LOGIN.path,
        checkIfRouteEnabled(pathNames.LOGIN.name),
        pathNames.LOGIN.roles,
        Login
    ),
    ROOT: createRoute(
        'home-route',
        pathNames.ROOT.name,
        pathNames.ROOT.path,
        checkIfRouteEnabled(pathNames.ROOT.name),
        pathNames.ROOT.roles,
        MainLayout
    ),
    HOME_PAGE: createRoute(
        'home-page',
        pathNames.HOME_PAGE.name,
        pathNames.HOME_PAGE.path,
        checkIfRouteEnabled(pathNames.HOME_PAGE.name),
        pathNames.HOME_PAGE.roles,
        AuthLayout
    ),
    DASHBOARD: createRoute(
        'dashboard-page',
        pathNames.DASHBOARD.name,
        pathNames.DASHBOARD.path,
        checkIfRouteEnabled(pathNames.DASHBOARD.name),
        pathNames.DASHBOARD.roles,
        Dashboard
    ),
    PAGE_NOT_FOUND: createRoute(
        'page-not-found',
        pathNames.PAGE_NOT_FOUND.name,
        pathNames.PAGE_NOT_FOUND.path,
        checkIfRouteEnabled(pathNames.PAGE_NOT_FOUND.name),
        pathNames.PAGE_NOT_FOUND.roles,
        PageNotFound
    )
}
