import timezoneToCountry from '@/data/timezone-countries.json'

export function GetCountryBasedOnTimezone() {
  if (typeof Intl !== 'undefined') {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const userCountry = (timezoneToCountry as Record<string, string>)[timeZone]
    if (userCountry) {
      return userCountry
    } else {
      return 'Country not found for the current timezone.'
    }
  } else {
    return 'Intl API is not supported in this environment.'
  }
}
