import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { AuthStore, createAuthSlice } from './slices/auth-store'
import { createLanguageSlice, LanguageStore } from './slices/language-store'

type Store = AuthStore & LanguageStore

export type StoreSlice<TSlice> = StateCreator<
  Store,
  [['zustand/immer', never], ['zustand/persist', unknown]],
  [],
  TSlice
>

export const useStore = create<Store>()(
  persist(
    immer((...params) => ({
      ...createAuthSlice(...params),
      ...createLanguageSlice(...params),
    })),
    {
      name: 'easy3d:store',
    },
  ),
)
