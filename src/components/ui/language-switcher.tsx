import { Check, ChevronsUpDown } from 'lucide-react'
import { useShallow } from 'zustand/react/shallow'

import { languages } from '@/data/languages'
import { cn } from '@/lib/utils'
import { useStore } from '@/stores/use-store'

import { Base } from '../typography/text/base'
import { Button } from './button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from './command'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { ScrollArea, ScrollBar } from './scroll-area'

export function LanguageSwitcher() {
  const {
    openLanguageDropdown,
    setOpenLanguageDropdown,
    languageValue,
    setLanguageValue,
  } = useStore(
    useShallow((state) => ({
      openLanguageDropdown: state.openLanguageDropdown,
      setOpenLanguageDropdown: state.setOpenLanguageDropdown,
      languageValue: state.languageValue,
      setLanguageValue: state.setLanguageValue,
    })),
  )

  return (
    <Popover open={openLanguageDropdown} onOpenChange={setOpenLanguageDropdown}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openLanguageDropdown}
          className="w-20 justify-between rounded-[6px] border !border-easy3d-primary focus:!outline-none focus:!ring-1 focus:!ring-easy3d-primary focus:!ring-offset-easy3d-primary"
        >
          <span className="flex items-center justify-between">
            {languages ? (
              <span className="text-balance text-base font-normal leading-[1.5] text-accent-foreground">
                {
                  languages.find(
                    (language) =>
                      language.code.toLowerCase() ===
                      languageValue.toLowerCase(),
                  )?.flag
                }
              </span>
            ) : (
              <span>Select Language...</span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-40 rounded-[6px] p-0">
        <Command className="rounded-lg border shadow-md md:min-w-40">
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              <ScrollArea className="max-h-[150px] w-full overflow-y-auto">
                {languages.map((language) => (
                  <CommandItem
                    key={language.id}
                    value={language.code}
                    onSelect={(currentValue) => {
                      setLanguageValue(currentValue)
                      setOpenLanguageDropdown()
                    }}
                    className="flex cursor-pointer items-center justify-between text-xs hover:!bg-easy3d-primary hover:!text-white"
                  >
                    <div className="flex items-end gap-2">
                      <Base>{language.flag}</Base>
                      <Base>{language.language}</Base>
                    </div>
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        languageValue.toLowerCase() ===
                          language.code.toLowerCase()
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
  )
}
