import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const useCartStore = create(
  devtools(
    persist(
      (set) => ({
        products: [],
        totalAmount: 0,
        addToCart: (product) =>
          set((state) => ({
            products: [...state.products, product],
          })),
        removeFromCart: (code) =>
          set((state) => {
            const newProds = state.products.filter((prod) => {
              if (prod.code !== code) return prod
            })
            return {
              ...state,
              products: newProds,
            }
          }),
        setTotalAmount: (amount) =>
          set((state) => ({
            ...state,
            totalAmount: amount,
          })),
        increaseProductQuantity: (code) =>
          set((state) => {
            const newProds = state.products.filter((prod) => {
              if (prod.code === code) {
                prod.quantity++
              }
              return prod
            })
            return {
              ...state,
              products: newProds,
            }
          }),
        decreaseProductQuantity: (code) =>
          set((state) => {
            const newProds = state.products.filter((prod) => {
              if (prod.code === code) {
                prod.quantity--
              }
              return prod
            })
            return {
              ...state,
              products: newProds,
            }
          }),
      }),
      { name: 'cart' }
    )
  )
)

export default useCartStore
