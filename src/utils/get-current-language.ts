import { suportedLanguages } from '@/lib/i18n'

export function getCurrentLanguage(): suportedLanguages {
  return localStorage.getItem('i18nextLng') as suportedLanguages
}
