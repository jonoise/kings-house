import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  IconButton,
  Button,
  useDisclosure,
  Flex,
} from '@chakra-ui/react'
import { BiCart } from 'react-icons/bi'
import { colors } from '../../../globals'
import useCartStore from '../../../stores/useCartStore'
const CartModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <TableButton mt={4} onClick={onOpen}>
        Open Modal
      </TableButton>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CartModal

const NotificationBadge = (props) => (
  <Center
    bg={colors.secondary}
    color={colors.white}
    fontSize="xs"
    position="absolute"
    rounded="full"
    textAlign="center"
    top="-4px"
    insetEnd="0"
    w="17px"
    h="17px"
    zIndex="2"
    {...props}
  />
)

const TableButton = (props) => {
  const products = useCartStore((state) => state.products)

  return (
    <Flex
      outline="0"
      mt="0"
      m="0"
      w="8"
      h="8"
      position="relative"
      rounded="md"
      _hover={{ bg: 'whiteAlpha.200' }}
      _focus={{ shadow: 'outline' }}
      onClick={props.onClick}
      {...props}
    >
      <NotificationBadge>{products.length}</NotificationBadge>
      <IconButton
        bg={colors.main}
        color={colors.white}
        size="sm"
        rounded="full"
        icon={<BiCart />}
        m="0"
        p="0"
      />
    </Flex>
  )
}
