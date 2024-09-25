import { AlertCircleIcon } from 'lucide-react'
import { Control, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Small } from '../typography/text/small'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

interface ICustomerTypeSelectProps {
  control: Control<any>
  name: string
  error?: string
}

export function CustomerTypeSelect({
  control,
  name,
  error,
}: ICustomerTypeSelectProps) {
  const { t } = useTranslation()

  const customerTypes = [
    {
      type: t('customer-type-select.CLINICA_RADIOLOGICA_ODONTOLOGICA'),
      value: 'CLINICA_RADIOLOGICA_ODONTOLOGICA',
    },
    {
      type: t('customer-type-select.CLINICA_RADIOLOGICA_MEDICA'),
      value: 'CLINICA_RADIOLOGICA_MEDICA',
    },
    {
      type: t('customer-type-select.CIRURGIAO_DENTISTA'),
      value: 'CIRURGIAO_DENTISTA',
    },
  ]

  return (
    <div className="grid gap-2">
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select onValueChange={onChange} value={value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a kind..." />
            </SelectTrigger>
            <SelectContent>
              {customerTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && (
        <div className="text mr-4 flex items-center gap-2">
          <AlertCircleIcon className="h-[14px] w-[14px] text-destructive" />
          <Small className="text-destructive">{error}</Small>
        </div>
      )}
    </div>
  )
}
