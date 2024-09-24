import i18nIsoCountries from 'i18n-iso-countries'
import enCountries from 'i18n-iso-countries/langs/en.json'
import esCountries from 'i18n-iso-countries/langs/es.json'
import ptCountries from 'i18n-iso-countries/langs/pt.json'
import { getCurrentLanguage } from './get-current-language'

export function setI18nIsoCountriesLocalization() {
  const language = getCurrentLanguage()

  i18nIsoCountries.registerLocale(
    language === 'pt-BR' || language === 'pt-PT'
      ? ptCountries
      : language === 'es'
        ? esCountries
        : enCountries,
  )
}
