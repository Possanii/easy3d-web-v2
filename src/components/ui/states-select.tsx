import { AlertCircleIcon, Check, ChevronsUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
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

import states from '@/data/states.json'
import { cn } from '@/lib/utils'
import { lowerCase, sentenceCase } from '@/utils/format-string'
import { useState } from 'react'
import { Control, Controller, UseFormWatch } from 'react-hook-form'
import { Base } from '../typography/text/base'
import { Small } from '../typography/text/small'

export interface StateProps {
  id: number
  name: string
  country_id: number
  country_code: string
  country_name: string
  state_code: string
  type: string | null
  latitude: string
  longitude: string
}

interface StateDropdownProps {
  control: Control<any>
  watch: UseFormWatch<any>
  name: string
  error?: string
}

const StateDropdown = ({ control, name, error, watch }: StateDropdownProps) => {
  const country = watch('addressStep.country')

  const [openStateDropdown, setOpenStateDropdown] = useState<boolean>(false)

  const SD = states as StateProps[]
  const S = SD.filter((state) => state.country_name === sentenceCase(country))

  return (
    <div className="ga-2 grid">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openStateDropdown}
                className="inline-flex h-10 items-center justify-between self-start rounded-md border border-stone-200 bg-white px-4 py-2 text-sm font-medium ring-offset-white transition-colors hover:bg-stone-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                disabled={!country || S.length === 0}
              >
                <div className="flex items-center justify-between">
                  {value ? (
                    <div className="flex items-end gap-2">
                      <Base className="max-w-[200px] truncate text-nowrap lg:max-w-[140px]">
                        {
                          S.find(
                            (state) =>
                              lowerCase(state.name) === lowerCase(value),
                          )?.name
                        }
                      </Base>
                    </div>
                  ) : (
                    <Base>Select State...</Base>
                  )}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] rounded-[6px] p-0">
              <Command>
                <CommandInput placeholder="Search state..." />
                <CommandEmpty>No state found.</CommandEmpty>
                <CommandList className="overflow-y-hidden">
                  <CommandGroup>
                    <ScrollArea className="h-[300px] w-full">
                      {S.map((state) => (
                        <CommandItem
                          key={state.id}
                          value={state.name}
                          onSelect={(currentValue) => {
                            onChange(currentValue)
                            setOpenStateDropdown(false)
                          }}
                          className="flex cursor-pointer items-center justify-between text-xs hover:!bg-easy3d-primary hover:!text-white"
                        >
                          <div className="flex items-end gap-2">
                            <Base>{state.name}</Base>
                          </div>
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              value === lowerCase(state.name)
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

export default StateDropdown
