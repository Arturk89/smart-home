import { UserRole } from './routes.types'

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