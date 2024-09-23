import { redirect } from 'react-router-dom'
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
    set((prevState) => {
      prevState.auth.isLoggedIn = true
    })

    redirect('/')
  },
  logout: () =>
    set((prevState) => {
      prevState.auth.isLoggedIn = false
    }),
})
