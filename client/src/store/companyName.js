import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCompanyStore = create(
  persist(
    (set) => ({
      companyName: 'COMPANY NAME',
      setCompanyName: (name) =>
        set(() => ({
          companyName: name,
        })),
    }),
    {
      name: 'companyName',
    }
  )
)
