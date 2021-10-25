import { AddIcon, EditIcon, MinusIcon } from '@chakra-ui/icons'
import {
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Image,
  Box,
  Icon,
  Badge,
  Text,
  Center,
  IconButton,
  Button,
  useDisclosure,
  Flex,
  VStack,
  Stack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { BiCart } from 'react-icons/bi'
import { FaArrowLeft } from 'react-icons/fa'
import { colors } from '../../../globals'
import { calculateOrderAmount } from '../../../lib/calculateOrderAmount'
import useCartStore from '../../../stores/useCartStore'
import DeleteCartProduct from '../modals/deleteCartProduct'
const CartDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cartProducts = useCartStore((state) => state.products)
  const setTotalAmount = useCartStore((state) => state.setTotalAmount)
  const totalAmount = useCartStore((state) => state.totalAmount)
  const increaseProductQuantity = useCartStore(
    (state) => state.increaseProductQuantity
  )
  const decreaseProductQuantity = useCartStore(
    (state) => state.decreaseProductQuantity
  )

  useEffect(() => {
    const calcOrderAmount = calculateOrderAmount(cartProducts)
    setTotalAmount(calcOrderAmount)
  }, [cartProducts, setTotalAmount])

  return (
    <>
      {/* OPENS MODAL */}
      <CartButton mt={4} onClick={onOpen} />

      {/* MODAL */}

      <Drawer size="full" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex w="full" align="center">
              <Button leftIcon={<FaArrowLeft />} onClick={onClose}>
                <Text>{'Volver'}</Text>
              </Button>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {cartProducts.length < 1 && <EmptyCart onClose={onClose} />}
            <Stack>
              {cartProducts.map((cartProduct) => (
                <>
                  <Flex
                    key={cartProduct.code}
                    w="full"
                    h="full"
                    bg="#fefef3"
                    p="2"
                    rounded="md"
                    shadow="lg"
                  >
                    <Flex w="30%" minH="5rem" maxH="5rem">
                      <Image
                        src={cartProduct.image}
                        roundedLeft="md"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        alt="Product image"
                      />
                    </Flex>
                    <Flex
                      direction="column"
                      minH="full"
                      w="full"
                      justify="space-between"
                      roundedRight="md"
                      bg="fefef3"
                      p="2"
                      border="1px solid #ffc1c1"
                      borderLeft="none"
                    >
                      <Flex justify="space-between" align="start">
                        <Box>
                          <Text
                            fontSize="16px"
                            fontWeight="semibold"
                            color="black"
                          >
                            {cartProduct.name}
                          </Text>
                        </Box>
                        <HStack p="2px">
                          <IconButton
                            bg={colors.main}
                            color={colors.white}
                            size="xs"
                            rounded="full"
                            icon={<EditIcon />}
                            m="0"
                            p="0"
                          />
                          <DeleteCartProduct product={cartProduct} />
                        </HStack>
                      </Flex>
                      <Flex justify="space-between" align="end">
                        <Badge variant="solid" colorScheme="green">
                          ₡{cartProduct.price * cartProduct.quantity}
                        </Badge>
                        <HStack>
                          <Text fontSize="14px" color="black">
                            Cantidad: {cartProduct.quantity}
                          </Text>
                          <IconButton
                            size="xs"
                            rounded="full"
                            icon={<MinusIcon />}
                            m="0"
                            p="0"
                            disabled={cartProduct.quantity <= 1 ? true : false}
                            onClick={() =>
                              decreaseProductQuantity(cartProduct.code)
                            }
                          />
                          <IconButton
                            size="xs"
                            rounded="full"
                            icon={<AddIcon />}
                            m="0"
                            p="0"
                            onClick={() =>
                              increaseProductQuantity(cartProduct.code)
                            }
                          />
                        </HStack>
                      </Flex>
                    </Flex>
                  </Flex>
                </>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter w="full" justifyContent="start" borderTopWidth="1px">
            <VStack
              w="full"
              justify="space-between"
              align="center"
              pb="4rem"
              pt="2rem"
            >
              <HStack>
                <Badge colorScheme="green">Total {totalAmount}</Badge>
                <Text>+</Text>
                <Badge colorScheme="orange">express</Badge>
              </HStack>
              <Flex
                px="4"
                py="2"
                justify="center"
                w="full"
                bg={colors.main}
                color={colors.white}
                rounded="md"
              >
                <Text>Pagar con sinpe</Text>
              </Flex>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CartDrawer

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

const CartButton = (props) => {
  const products = useCartStore((state) => state.products)

  return (
    <Flex
      position="relative"
      outline="0"
      mt="0"
      bg="red"
      m="0"
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

const EmptyCart = ({ onClose }) => {
  return (
    <VStack>
      <Text>Carrito Vacío</Text>
      <Flex
        w="50%"
        py="2"
        px="5"
        rounded="md"
        bg={colors.main}
        color={colors.white}
        onClick={onClose}
        justify="center"
        shadow="dark-lg"
      >
        Volver al menú
      </Flex>
    </VStack>
  )
}
