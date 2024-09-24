import { Control, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
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
}

export function CustomerTypeSelect({
  control,
  name,
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
  )
}
