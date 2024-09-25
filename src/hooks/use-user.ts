import { IAddress } from '@/schemas/address'
import { ICustomerTypes } from '@/schemas/customer-types'
import { IPermissions } from '@/schemas/permissions'
import { IRole } from '@/schemas/roles'
import { IUserType } from '@/schemas/user-types'
import { useStore } from '@/stores/use-store'
import Cookies from 'js-cookie'
import { useShallow } from 'zustand/react/shallow'

interface IUserData {
  id: string
  name: string
  email: string
  country: string
  active: boolean
  role: IRole
  type: IUserType
  employee?: {
    id: string
    permissions: IPermissions[]
  }
  customer?: {
    id: string
    address: IAddress
    identity: string
    phone: string
    kind: ICustomerTypes
    enrollment?: string
  }
  patient?: {
    id: string
    phone: string
    identity: string
    bornedAt: string
    gender: 'MALE' | 'FEMALE' | 'OTHER'
  }
}

export function useUser() {
  const { logout } = useStore(
    useShallow((state) => ({
      logout: state.logout,
    })),
  )

  const userData = Cookies.get('user')

  if (!userData) {
    logout()
  }

  try {
    const jsonPart = userData!.slice(2, userData!.lastIndexOf('.'))

    const parsedUserData = JSON.parse(jsonPart!) as IUserData

    return parsedUserData
  } catch (err) {
    console.log(err)
  }
}
