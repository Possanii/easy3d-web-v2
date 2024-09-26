import { logout } from '@/http/auth/logout'
import { getUserProfile } from '@/http/user/get-user-profile'
import { clearStorages } from '@/utils/clear-storages'

import { StoreSlice } from '../use-store'

type AuthVariables = {
  isLoggedIn: boolean
}

type AuthActions = {
  signIn: () => Promise<void>
  logout: () => void
}

export type AuthStore = AuthVariables & AuthActions

export const createAuthSlice: StoreSlice<AuthStore> = (set) => ({
  isLoggedIn: false,
  signIn: async () => {
    await getUserProfile()
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
