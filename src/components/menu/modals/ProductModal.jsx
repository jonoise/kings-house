import {
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
} from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'
import useProductDrawer from '../../../stores/useProductDrawer'
import useProductsStore from '../../../stores/useProductsStore'
import useFetch from '../../../hooks/useFetch'
const ProductModal = () => {
  // TODO: THIS COMPONENT HAS A SPINNER THAT NEEDS TO BE REFACTORED
  const isOpen = useProductDrawer((state) => state.isOpen)
  const onClose = useProductDrawer((state) => state.onClose)
  const [res, makeGetRequest] = useFetch()
  const firstField = useRef()

  const product = useProductsStore((state) => state.currentProduct)
  const currentCategory = useProductsStore((state) => state.currentCategory)

  useEffect(() => {
    product && makeGetRequest(`products/${product.id}`)
  }, [makeGetRequest, product])

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        size="full"
      >
        <DrawerOverlay />
        {product && !res.loading ? (
          <DrawerContent bg={styles.dimWhite} color="black">
            <DrawerHeader borderBottomWidth="1px" borderColor="black">
              <Flex w="full" align="center">
                <Button leftIcon={<FaArrowLeft />} onClick={onClose}>
                  <Text>{currentCategory}</Text>
                </Button>
              </Flex>
            </DrawerHeader>
            <DrawerBody p="0">
              <Stack spacing="24px">
                <VStack spacing="1" bg="red">
                  <Flex w="full" maxH="300px">
                    <Image
                      src={`http://localhost:8000` + product.image}
                      w="100%"
                      objectFit="cover"
                      alt="Imagen del producto."
                    />
                  </Flex>
                </VStack>
                <Stack fontSize="16px" px="2">
                  <Text color={styles.black} fontSize="30px" fontWeight="bold">
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
                </Stack>
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

export default ProductModal

const styles = {
  yellow: '#f5c000',
  blue: '#5267f6',
  green: '#6afdef',
  purple: '#8d2ef0',
  red: '#ec7965',
  black: '#1a1a1a',
  dimWhite: '#f2f2f2',
}
