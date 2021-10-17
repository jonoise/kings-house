import create from 'zustand'

const useProductsStore = create((set) => ({
  products: null,
  currentProduct: null,
  setProducts: (products) =>
    set((state) => ({
      ...state,
      products: products,
    })),
  setCurrentProduct: (product) =>
    set((state) => ({
      ...state,
      currentProduct: product,
    })),
}))

export default useProductsStore
