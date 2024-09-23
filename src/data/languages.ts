type ILanguage = {
  id: number
  language: string
  code: 'pt-BR' | 'en' | 'es' | 'pt-PT'
  flag: string
}

export const languages: ILanguage[] = [
  {
    id: 1,
    language: 'Português',
    code: 'pt-BR',
    flag: '🇧🇷',
  },
  {
    id: 2,
    language: 'English',
    code: 'en',
    flag: '🇺🇸',
  },
  {
    id: 3,
    language: 'Español',
    code: 'es',
    flag: '🇪🇸',
  },
  {
    id: 4,
    language: 'Portugal',
    code: 'pt-PT',
    flag: '🇵🇹',
  },
]
