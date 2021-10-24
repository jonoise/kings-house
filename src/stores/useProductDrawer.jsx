import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useProductDrawer = create(
  devtools((set) => ({
    isOpen: false,
    onClose: () =>
      set((state) => ({
        isOpen: false,
      })),
    onOpen: () =>
      set((state) => ({
        isOpen: true,
      })),
  }))
)

export default useProductDrawer
