import { StoreSlice } from '../use-store'

type AuthVariables = {
  auth: {
    isLoggedIn: boolean
  }
}

type AuthActions = {
  signIn: () => void
  logout: () => void
}

export type AuthStore = AuthVariables & AuthActions

export const createAuthSlice: StoreSlice<AuthStore> = (set) => ({
  auth: {
    isLoggedIn: false,
  },
  signIn: () => {
    set({ auth: { isLoggedIn: true } })
  },
  logout: () => {
    localStorage.clear()
    sessionStorage.clear()
    set({ auth: { isLoggedIn: false } })
  },
})
