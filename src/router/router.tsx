import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Page404 } from '@/app/404'
import { ForgotPasswordPage } from '@/app/auth/forgot-password/page'
import { RecoverPasswordPage } from '@/app/auth/recover-password/page'
import { SignInPage } from '@/app/auth/sign-in/page'
import { SignUpPage } from '@/app/auth/sign-up/page'
import { DashboardPage } from '@/app/dashboard/page'
import { ManagePatientsPage } from '@/app/management/patients'
import { WorkspaceLayout } from '@/layout/workspace-layout'

import { AuthGuard } from './auth-guard'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/auth/sign-in" element={<SignInPage />} />
          <Route path="/auth/sign-up" element={<SignUpPage />} />
          <Route
            path="/auth/forgot-password"
            element={<ForgotPasswordPage />}
          />
          <Route
            path="/auth/recover-password"
            element={<RecoverPasswordPage />}
          />
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<WorkspaceLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users" element={<ManagePatientsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
