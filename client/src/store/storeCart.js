import { create } from 'zustand'

export const useCartStore = create((set) => ({
  isCart: 0,
  setIsCart: (isCart) => set((state) => ({ isCart: (state.isCart = isCart) })),
}))
