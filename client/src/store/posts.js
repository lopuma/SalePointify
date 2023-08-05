import { create } from 'zustand'
export const usePostsStore = create((set) => ({
  posts: [],
  loading: true,
  addPot: () => set((state) => ({ posts: [...state.posts, 0] })),
  removePot: (index) =>
    set((state) => ({ posts: state.posts.filter((_, i) => i !== index) })),
  getPosts: async () => {
    try {
      const posts = await (
        await fetch('https://jsonplaceholder.typicode.com/posts')
      ).json()
      set((state) => ({ ...state, posts, loading: false }))
    } catch (error) {}
  },
}))
