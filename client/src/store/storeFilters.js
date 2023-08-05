import { FILTERS_LIST } from '@/consts/filters'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
export const storeFilters = create(
  persist(
    (set) => ({
      category: FILTERS_LIST.ALL_PRODUCTS_FILTER,
      minPrice: 0,
      setUpdateCategory: (category) =>
        set((state) => ({ category: (state.category = category) })),
    }),
    {
      name: 'filters-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
