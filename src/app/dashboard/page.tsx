import { ability } from '@/auth/auth'
import { useUser } from '@/hooks/use-user'

export function DashboardPage() {
  const user = useUser()

  const permissions = ability()

  console.log(permissions?.can('get', 'User'))

  return (
    <div>
      <pre>{JSON.stringify(user!, null, 2)}</pre>
    </div>
  )
}
