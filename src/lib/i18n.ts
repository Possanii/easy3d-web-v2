import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { env } from '@/config/env'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ['pt-BR', 'en', 'es', 'pt-PT'],
    debug: env.VITE_NODE_ENV !== 'production',
    fallbackLng: 'en',
  })

export default i18n
