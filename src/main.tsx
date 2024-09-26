import './global.css'
import './lib/i18n.ts'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from './components/ui/providers.tsx'
import { Router } from './router/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Router />
    </Providers>
  </StrictMode>,
)
