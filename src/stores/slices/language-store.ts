import i18n from '@/lib/i18n'
import { StoreSlice } from '../use-store'

type LanguageVariables = {
  languageValue: string
  openLanguageDropdown: boolean
}

type LanguageActions = {
  setLanguageValue: (language: string) => void
  setOpenLanguageDropdown: () => void
}

export type LanguageStore = LanguageVariables & LanguageActions

export const createLanguageSlice: StoreSlice<LanguageStore> = (set) => ({
  languageValue: localStorage.getItem('i18nextLng')!,
  openLanguageDropdown: false,
  setLanguageValue: (language: string) => {
    set(() => ({
      languageValue: language,
    }))
    i18n.changeLanguage(language)
  },
  setOpenLanguageDropdown: () => {
    set((prev) => ({
      openLanguageDropdown: !prev.openLanguageDropdown,
    }))
  },
})
