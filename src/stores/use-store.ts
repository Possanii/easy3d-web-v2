import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { AuthStore, createAuthSlice } from './slices/auth-store'

type Store = { auth: AuthStore }

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/immer', never]],
  [],
  TSlice
>

export const useStore = create<Store>()(
  persist(
    immer((...params) => ({
      auth: createAuthSlice(...params),
    })),
    {
      name: 'presist:auth',
    },
  ),
)
