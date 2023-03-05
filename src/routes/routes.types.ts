export type UserRoleName = 'ADMIN' | 'PUBLIC'

export type UserRoleDetails = {
  name: string,
  id: number
}

export type UserRole = {
  [name in UserRoleName]: UserRoleDetails
}

export type SingleRouteObject = {
  key: string
  title: string
  path: string
  enabled: boolean
  Component: React.ComponentType
  role: UserRoleDetails[]
}

export type RouteObject = {
  [name in PATH_NAMES]: SingleRouteObject
}
  
export type PathNames = {
  [name in PATH_NAMES]: {
    name: string,
    path: string,
    roles: UserRoleDetails[]
  }
}

export type PATH_NAMES =
  | 'HOME'
  | 'HOME_PAGE'
  | 'LOGIN'
  | 'PAGE_NOT_FOUND'