import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useProductsStore = create(
  devtools((set) => ({
    categories: null,
    categoriesHash: null,
    products: null,
    currentProduct: null,
    currentCategory: 'subs',
    mobileCategory: null,
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
    setMobileCategory: (category) =>
      set((state) => ({
        ...state,
        mobileCategory: category,
      })),
    setCurrentProduct: (product) =>
      set((state) => ({
        ...state,
        currentProduct: product,
      })),
    setCurrentImage: (image) =>
      set((state) => ({
        ...state,
        currentImage: image,
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
