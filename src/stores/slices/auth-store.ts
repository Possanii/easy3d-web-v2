import { logout } from '@/http/auth/logout'
import { clearStorages } from '@/utils/clear-storages'
import { StoreSlice } from '../use-store'

type AuthVariables = {
  isLoggedIn: boolean
}

type AuthActions = {
  signIn: () => void
  logout: () => void
}

export type AuthStore = AuthVariables & AuthActions

export const createAuthSlice: StoreSlice<AuthStore> = (set) => ({
  isLoggedIn: false,
  signIn: () => {
    set(() => ({
      isLoggedIn: true,
    }))
  },
  logout: async () => {
    await logout()
    clearStorages()
    set(() => ({
      isLoggedIn: false,
    }))
  },
})
