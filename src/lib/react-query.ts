import { QueryClient } from '@tanstack/react-query'

export function queryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
}
