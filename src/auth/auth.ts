import { IUserData } from '@/hooks/use-user'
import Cookies from 'js-cookie'
import { defineAbilityFor } from '.'

export function ability(isId: boolean = true) {
  const userData = Cookies.get('user')

  const jsonPart = userData!.slice(2, userData!.lastIndexOf('.'))

  const parsedUserData = JSON.parse(jsonPart!) as IUserData

  if (!parsedUserData) {
    return null
  }

  let id = parsedUserData.id

  if (!isId) {
    id = parsedUserData.patient
      ? parsedUserData.patient.id
      : parsedUserData.customer
        ? parsedUserData.customer.id
        : parsedUserData.employee!.id
  }

  const ability = defineAbilityFor({
    __typename: 'User',
    id,
    role: parsedUserData.role,
    permissions: parsedUserData.employee?.permissions,
  })

  return ability
}
