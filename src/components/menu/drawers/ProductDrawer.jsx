import {
  IconButton,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Stack,
  Button,
  Text,
  Image,
  Flex,
  Spinner,
  Badge,
  HStack,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { FaArrowLeft } from 'react-icons/fa'
import { useRef, useState } from 'react'
import useProductDrawer from '../../../stores/useProductDrawer'
import useProductsStore from '../../../stores/useProductsStore'
import AddToCart from '../buttons/AddToCart'
import { colors } from '../../../globals'
const ProductDrawer = () => {
  const firstField = useRef()
  const isOpen = useProductDrawer((state) => state.isOpen)
  const onClose = useProductDrawer((state) => state.onClose)
  const product = useProductsStore((state) => state.currentProduct)
  const currentCategory = useProductsStore((state) => state.mobileCategory)

  // ADD TO CART STRUCTURE
  const [quantity, setQuantity] = useState(1)
  const [description, setDescription] = useState('')

  const handleCloseProductDrawer = () => {
    setQuantity(1)
    onClose()
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        size="full"
      >
        <DrawerOverlay />
        {product ? (
          <DrawerContent bg={colors.white} color="black">
            <DrawerHeader borderBottomWidth="1px" borderColor="black">
              <Flex w="full" align="center">
                <Button
                  leftIcon={<FaArrowLeft />}
                  onClick={handleCloseProductDrawer}
                >
                  <Text>{currentCategory}</Text>
                </Button>
              </Flex>
            </DrawerHeader>
            <DrawerBody p="0">
              <Stack spacing="24px">
                <VStack spacing="1" bg="red">
                  <Flex w="full" maxH="300px">
                    <Image
                      src={product.image}
                      w="100%"
                      objectFit="cover"
                      alt="Imagen del producto."
                    />
                  </Flex>
                </VStack>
                <Stack fontSize="16px" px="2">
                  <Text color={colors.dark} fontSize="30px" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Box>
                    <Badge fontSize="1rem" variant="solid" colorScheme="green">
                      ₡{product.price}
                    </Badge>
                  </Box>
                  <Text fontSize="16px" color="#505050">
                    {product.description}
                  </Text>
                  <ProductQuantityHandler
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </Stack>
                <Flex w="full" pb="4rem" px="2">
                  <AddToCart
                    description={description}
                    setDescription={setDescription}
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </Flex>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        ) : (
          <DrawerContent>
            <DrawerBody p="0">
              <Flex w="full" h="full" justify="center" align="center">
                <Spinner
                  size="xl"
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                />
              </Flex>
            </DrawerBody>
          </DrawerContent>
        )}
      </Drawer>
    </>
  )
}

export default ProductDrawer

const ProductQuantityHandler = ({ quantity, setQuantity }) => {
  return (
    <HStack justify="center" borderTop="1px solid #b8b8b8" pt="2" pb="4rem">
      <IconButton
        colorScheme="blue"
        size="lg"
        rounded="full"
        icon={<MinusIcon />}
        m="0"
        p="0"
        disabled={quantity <= 1 ? true : false}
        variant="outline"
        onClick={() => setQuantity((prev) => prev - 1)}
      />
      <Text fontSize="2rem">{quantity}</Text>
      <IconButton
        colorScheme="blue"
        size="lg"
        rounded="full"
        icon={<AddIcon />}
        m="0"
        p="0"
        variant="outline"
        onClick={() => setQuantity((prev) => prev + 1)}
      />
    </HStack>
  )
}
