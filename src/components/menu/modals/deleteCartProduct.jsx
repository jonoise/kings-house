import { DeleteIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { colors } from '../../../globals'
import useCartStore from '../../../stores/useCartStore'

const DeleteCartProduct = ({ product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        bg={colors.secondary}
        color={colors.white}
        size="xs"
        rounded="full"
        icon={<DeleteIcon />}
        m="0"
        p="0"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m="2">
          <ModalHeader>Eliminar del carrito</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{`Deseas eliminar ${verboseCategory[product.category]} ${
              product.name
            }?`}</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Volver
            </Button>
            <Button
              colorScheme="red"
              onClick={() => removeFromCart(product.code)}
            >
              Eliminar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteCartProduct

const verboseCategory = {
  1: 'el sub',
  2: 'la bebida',
  3: 'las papitas',
}
