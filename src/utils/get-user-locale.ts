import countries from '@/data/countries.json'
import { GetCountryBasedOnTimezone } from './get-country-based-on-timezone'

export function GetUserLocale(): string {
  if (typeof Intl !== 'undefined') {
    const currentCountry = GetCountryBasedOnTimezone()

    const countryCode = countries.find(
      (country) => country.name === currentCountry,
    )?.iso2

    if (countryCode) {
      return countryCode.toUpperCase()
    }
    return 'Country Code not found for the current country.'
  } else {
    return 'Intl API is not supported in this environment.'
  }
}
