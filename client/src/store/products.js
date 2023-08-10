import { create } from 'zustand'

export const useStoreProducts = create((set) => ({
  isLoading: true,
  setIsLoading: (value) => set({ isLoading: value }),
  productos: [],
  setProducts: (value) => set({ productos: value }),
}))
