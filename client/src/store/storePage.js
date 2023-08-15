import { create } from 'zustand'

export const usePageStore = create((set) => ({
  isPage: 1,
  setIsPage: (isPage) => set((state) => ({ isPage: (state.isPage = isPage) })),
}))
