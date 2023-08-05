import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const useTab = create(
  persist(
    (set) => ({
      status: 'active',
      setStatus: (tab) => set({ status: tab }),
    }),
    { name: 'tab-status' }
  )
)
