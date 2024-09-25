import { getCountriesOptions } from '@/utils/get-country-options'
import { isoToEmoji } from '@/utils/iso-to-emoji'

import { getCurrentLanguage } from '@/utils/get-current-language'
import { safeSessionStorageGetItem } from '@/utils/safe-session-storage-get-item'
import { setI18nIsoCountriesLocalization } from '@/utils/set-i18n-iso-countries-localization'
import { type CountryCallingCode } from 'libphonenumber-js'
import { AlertCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import PhoneInput, { type Country } from 'react-phone-number-input/input'
import { Small } from '../typography/text/small'
import { ComboboxCountryInput } from './country-select'
import { Input } from './input'

type CountryOption = {
  value: Country
  label: string
  indicatif: CountryCallingCode
}

interface IInputPhoneProps {
  control: Control<any>
  name: string
  setValue: UseFormSetValue<any>
  fieldToBeSet: string
  error?: string
}

export function InputPhone({
  control,
  name,
  setValue,
  fieldToBeSet,
  error,
}: IInputPhoneProps) {
  const language = getCurrentLanguage()

  setI18nIsoCountriesLocalization()

  const options = getCountriesOptions()

  const [country, setCountry] = useState<CountryOption>(
    safeSessionStorageGetItem<CountryOption>('country_phone') ??
      (language === 'pt-BR'
        ? options.find((country) => country.value === 'BR')!
        : language === 'pt-PT'
          ? options.find((country) => country.value === 'PT')!
          : language === 'es'
            ? options.find((country) => country.value === 'ES')!
            : options.find((country) => country.value === 'US')!),
  )

  const onCountryChange = (value: CountryOption) => {
    setValue(fieldToBeSet, '')
    setCountry(value)
    sessionStorage.setItem('country_phone', JSON.stringify(value))
  }

  return (
    <div className="not-prose flex flex-col gap-4">
      <div className="flex gap-2">
        <ComboboxCountryInput
          value={country}
          onValueChange={onCountryChange}
          options={options}
          placeholder="Find your country..."
          renderOption={({ option }) =>
            `${isoToEmoji(option.value)} ${option.label}`
          }
          renderValue={(option) => option.label}
          emptyMessage="No country found."
        />
        <div className="flex flex-1 flex-col gap-2">
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                international
                withCountryCallingCode
                country={country.value.toUpperCase() as Country}
                value={value}
                inputComponent={Input}
                onChange={onChange}
              />
            )}
          />
          {error && (
            <div className="mr-4 flex items-center gap-2">
              <AlertCircleIcon className="h-[14px] w-[14px] text-destructive" />
              <Small className="text-destructive">{error}</Small>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
