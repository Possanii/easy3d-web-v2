import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

import { Router } from './router/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
    <Toaster />
  </StrictMode>,
)
