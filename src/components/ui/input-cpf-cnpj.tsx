import { Control, Controller } from 'react-hook-form'

import { cpfCnpjMask } from '@/helpers/cpf-cnpj-mask'

import { Input } from './input'

interface IInputCpfCpnjProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  name: string
  error?: string
}

export function InputCpfCpnj({ control, name, error }: IInputCpfCpnjProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Input
          id="identity"
          value={value}
          onChange={(event) => {
            onChange(cpfCnpjMask(event.target.value))
          }}
          required
          description="Enter the number of the official document used in your country, such as a passport, ID, NIF..."
          error={error}
        />
      )}
    />
  )
}
