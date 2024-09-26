import { AlertCircleIcon, Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { Control, Controller } from 'react-hook-form'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import countries from '@/data/countries.json'
import { cn } from '@/lib/utils'
import { lowerCase } from '@/utils/format-string'

import { Base } from '../typography/text/base'
import { Small } from '../typography/text/small'
import { Button } from './button'

interface Timezone {
  zoneName: string
  gmtOffset: number
  gmtOffsetName: string
  abbreviation: string
  tzName: string
}
export interface CountryProps {
  id: number
  name: string
  iso3: string
  iso2: string
  numeric_code: string
  phone_code: string
  capital: string
  currency: string
  currency_name: string
  currency_symbol: string
  tld: string
  native: string
  region: string
  region_id: string
  subregion: string
  subregion_id: string
  nationality: string
  timezones: Timezone[]
  translations: Record<string, string>
  latitude: string
  longitude: string
  emoji: string
  emojiU: string
}

interface CountryDropdownProps {
  disabled?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  name: string
  error?: string
}

const CountryDropdown = ({
  disabled,
  name,
  control,
  error,
}: CountryDropdownProps) => {
  const [openCountryDropdown, setOpenCountryDropdown] = useState<boolean>(false)

  return (
    <div className="grid gap-2">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Popover
            open={openCountryDropdown}
            onOpenChange={setOpenCountryDropdown}
          >
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openCountryDropdown}
                className="inline-flex h-10 items-center justify-between self-start overflow-hidden rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                disabled={disabled}
              >
                <span className="flex items-center justify-between">
                  {value ? (
                    <span className="flex items-end gap-2">
                      <span className="text-balance text-base font-normal leading-[1.5] text-accent-foreground">
                        {
                          countries.find(
                            (country) =>
                              lowerCase(country.name) === lowerCase(value),
                          )?.emoji
                        }
                      </span>
                      <span className="max-w-[200px] truncate text-nowrap text-base font-normal leading-[1.5] text-accent-foreground lg:max-w-[140px]">
                        {
                          countries.find(
                            (country) =>
                              lowerCase(country.name) === lowerCase(value),
                          )?.name
                        }
                      </span>
                    </span>
                  ) : (
                    <span className="text-balance text-base font-normal leading-[1.5] text-accent-foreground">
                      Select Country...
                    </span>
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] rounded-[6px] p-0">
              <Command>
                <CommandInput placeholder="Search country..." />
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandList className="overflow-y-hidden">
                  <CommandGroup>
                    <ScrollArea className="h-[300px] w-full overflow-y-hidden">
                      {countries.map((country) => (
                        <CommandItem
                          key={country.id}
                          value={country.name}
                          onSelect={(currentValue) => {
                            onChange(currentValue)
                            setOpenCountryDropdown(false)
                          }}
                          className="flex cursor-pointer items-center justify-between text-xs hover:!bg-easy3d-primary hover:!text-white"
                        >
                          <div className="flex items-end gap-2">
                            <Base>{country.emoji}</Base>
                            <Base>{country.name}</Base>
                          </div>
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              value === lowerCase(country.name)
                                ? 'opacity-100'
                                : 'opacity-0',
                            )}
                          />
                        </CommandItem>
                      ))}
                      <ScrollBar orientation="vertical" />
                    </ScrollArea>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      />
      {error && (
        <div className="mr-4 flex items-center gap-2">
          <AlertCircleIcon className="h-[14px] w-[14px] text-destructive" />
          <Small className="text-destructive">{error}</Small>
        </div>
      )}
    </div>
  )
}

export default CountryDropdown
