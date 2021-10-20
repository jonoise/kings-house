import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useProductsStore = create(
  devtools((set) => ({
    categories: null,
    categoriesHash: null,
    products: null,
    currentCategory: 'subs',
    currentImage: null,
    setCategories: (categories) =>
      set((state) => ({
        ...state,
        categories: categories,
      })),
    setCurrentCategory: (category) =>
      set((state) => ({
        ...state,
        currentCategory: category,
      })),
    setCurrentImage: (image) =>
      set((state) => ({
        ...state,
        currentImage: `http://localhost:8000${image}`,
      })),
    setCategoriesHash: (categories) =>
      set((state) => {
        let categoriesHash = {}
        categories.map((cat) => (categoriesHash[cat.slug] = cat))
        return {
          categoriesHash: categoriesHash,
        }
      }),
  }))
)

export default useProductsStore
