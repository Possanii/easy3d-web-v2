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

interface IDocumentTypeSelectProps {
  control: Control<any>
  name: string
  error?: string
}

export function DocumentTypeSelect({
  control,
  name,
  error,
}: IDocumentTypeSelectProps) {
  const { t } = useTranslation()

  const documentTypes = [
    {
      type: t('document-type-select.passport'),
      value: 'PASSPORT',
    },
    {
      type: t('document-type-select.document'),
      value: 'DOCUMENT',
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
              <SelectValue placeholder="Select type..." />
            </SelectTrigger>
            <SelectContent>
              {documentTypes.map((type) => (
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
