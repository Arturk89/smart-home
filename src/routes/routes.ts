import { create } from '@mui/material/styles/createTransitions'
import path from 'path'
import { lazy } from 'react'

export type UserRoleDetails = {
  name: string,
  id: number
}

type UserRole = {
  [name: string]: UserRoleDetails
}

type SingleRouteObject = {
  key: string
  title: string
  path: string
  enabled: boolean
  Component: React.ComponentType
  role: UserRoleDetails[]
}

export const Roles: UserRole = {
  ADMIN: {
    name: 'ADMIN',
    id: 1
  },
  PUBLIC: {
    name: 'CLIENT',
    id: 2
  }
} as const

type PATH_NAMES =
  | 'HOME'
  | 'HOME_PAGE'
  | 'LOGIN'
  | 'PAGE_NOT_FOUND'

type RouteObject = {
  [name in PATH_NAMES]: SingleRouteObject
}
  
type PathNames = {
  [name: string]: {
    name: string,
    path: string,
    roles: UserRoleDetails[]
  }
}

export const pathNames: PathNames = {
  PAGE_NOT_FOUND: {
    name: 'Not Found',
    path: '*',
    roles: [Roles.ADMIN, Roles.PUBLIC]
  },
  HOME: {
    name: 'Home',
    path: '/',
    roles: [Roles.ADMIN, Roles.PUBLIC]
  },
  HOME_PAGE: {
    name: 'Home-Page',
    path: '/home',
    roles: [Roles.ADMIN, Roles.PUBLIC]
  },
  LOGIN: {
    name: 'Login',
    path: '/login',
    roles: [Roles.ADMIN, Roles.PUBLIC]
  }
}

const MainLayout = lazy(() => import('../layouts/MainLayout'))
const Login = lazy(() => import('../containers/Login/Login'))
const Home = lazy(() => import('../containers/HomePage/Home'))
const PageNotFound = lazy(() => import('../containers/NotFound/PageNotFound'))

function createRoute (key: string, title: string, path: string, enabled: boolean, role: UserRoleDetails[], Component: React.ComponentType): SingleRouteObject {
  return {
    key,
    title,
    path,
    enabled,
    Component,
    role
  }
}

function checkIfRouteEnabled (route: string) {
  // logic to checking route
  if (route) return true
  return true
}

export const routes: RouteObject = {
  LOGIN: createRoute('login-route', pathNames.LOGIN.name, pathNames.LOGIN.path, checkIfRouteEnabled(pathNames.LOGIN.name), pathNames.LOGIN.roles, Login),
  HOME: createRoute('home-route', pathNames.HOME.name, pathNames.HOME.path, checkIfRouteEnabled(pathNames.HOME.name), pathNames.HOME.roles, MainLayout),
  HOME_PAGE: createRoute('home-page', pathNames.HOME_PAGE.name, pathNames.HOME_PAGE.path, checkIfRouteEnabled(pathNames.HOME_PAGE.name), pathNames.HOME_PAGE.roles, Home),
  PAGE_NOT_FOUND: createRoute('page-not-found', pathNames.PAGE_NOT_FOUND.name, pathNames.PAGE_NOT_FOUND.path, checkIfRouteEnabled(pathNames.PAGE_NOT_FOUND.name), pathNames.PAGE_NOT_FOUND.roles, PageNotFound)
}