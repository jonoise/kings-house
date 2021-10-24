import { Flex } from '@chakra-ui/layout'
import { useToast } from '@chakra-ui/toast'
import { colors } from '../../../globals'
import useCartStore from '../../../stores/useCartStore'
import useProductDrawer from '../../../stores/useProductDrawer'
import useProductsStore from '../../../stores/useProductsStore'
import { customAlphabet } from 'nanoid'
const AddToCart = ({ description, setDescription, quantity, setQuantity }) => {
  const nanoid = customAlphabet('abcdefgjklmopqrstuvwxyz123456789', 15)
  const onClose = useProductDrawer((state) => state.onClose)
  const toast = useToast()

  // PRODUCT STORE ↓ - used in useEffect
  const currentProduct = useProductsStore((state) => state.currentProduct)
  // CartStore ↓
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    const cartProduct = {
      code: nanoid(),
      quantity: quantity,
      orderDescription: description,
      specifics: null,
      ...currentProduct,
    }
    addToCart(cartProduct)
    setQuantity(1)
    setDescription('')
    toast({
      status: 'success',
      variant: 'subtle',
      title: 'Se agregó al carrito 😊',
      position: 'top',
      isClosable: true,
    })
    onClose()
  }

  return (
    <Flex
      p="2"
      w="full"
      justify="center"
      bg={colors.main}
      color={colors.white}
      rounded="md"
      onClick={handleAddToCart}
    >
      Agregar {quantity} al carrito
    </Flex>
  )
}

export default AddToCart
