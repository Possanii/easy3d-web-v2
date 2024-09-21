import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SignInPage } from '@/app/auth/sign-in/page'
import { DashboardPage } from '@/app/dashboard/page'

import { AuthGuard } from './auth-guard'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/sign-in" element={<SignInPage />} />
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
