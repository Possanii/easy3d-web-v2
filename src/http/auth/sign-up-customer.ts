import api from '@/lib/axios-client'

interface IAddressCustomer {
  street: string
  number: string
  complement?: string
  city: string
  state: string
  zip: string
  country: string
}

interface ISignUpCustomerParams {
  name: string
  email: string
  password: string
  identity: string
  enrollment?: string
  phone: string
  address: IAddressCustomer
  country: string
  kind:
    | 'CLINICA_RADIOLOGICA_ODONTOLOGICA'
    | 'CLINICA_RADIOLOGICA_MEDICA'
    | 'CIRURGIAO_DENTISTA'
}

export async function signUpCustomer(data: ISignUpCustomerParams) {
  const result = await api.post('/customer', {
    ...data,
    type: data.kind === 'CIRURGIAO_DENTISTA' ? 'DOCTOR' : 'CLINIC',
  })

  return result
}
