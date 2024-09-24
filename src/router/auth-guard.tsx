import { useStore } from '@/stores/use-store'
import { Navigate, Outlet } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { isLoggedIn } = useStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
    })),
  )

  if (!isLoggedIn && isPrivate) {
    return <Navigate to={'/auth/sign-in'} replace />
  }

  if (isLoggedIn && !isPrivate) {
    return <Navigate to={'/'} replace />
  }

  return <Outlet />
}
