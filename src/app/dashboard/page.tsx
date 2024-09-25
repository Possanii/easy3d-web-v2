import { useUser } from '@/hooks/use-user'
import { Suspense } from 'react'

export function DashboardPage() {
  const user = useUser()

  return (
    <div>
      <Suspense fallback={'Loading...'}>
        <pre>{JSON.stringify(user!, null, 2)}</pre>
      </Suspense>
    </div>
  )
}
