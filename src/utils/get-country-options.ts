import i18nIsoCountries from 'i18n-iso-countries'
import {
  type CountryCallingCode,
  type CountryCode,
  getCountries,
  getCountryCallingCode,
} from 'libphonenumber-js'

import { getCurrentLanguage } from './get-current-language'

export function getCountriesOptions() {
  const countries = getCountries()
  const language = getCurrentLanguage()

  const options = countries
    .map((country) => ({
      value: country,
      label: i18nIsoCountries.getName(
        country.toUpperCase(),
        language!.slice(0, 2),
        {
          select: 'official',
        },
      ),
      indicatif: `+${getCountryCallingCode(country)}`,
    }))
    .filter((option) => option.label) as {
    value: CountryCode
    label: string
    indicatif: CountryCallingCode
  }[]

  return options
}
