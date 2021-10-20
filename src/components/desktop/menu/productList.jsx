import { Flex, Stack, Text, VStack } from '@chakra-ui/layout'
import { useEffect } from 'react'
import { colors } from '../../../globals'
import useProductsStore from '../../../stores/useProductsStore'

const ProductList = () => {
  const currentCategory = useProductsStore((state) => state.currentCategory)
  const categoryHash = useProductsStore((state) => state.categoriesHash)
  const products = categoryHash[currentCategory].products
  const setCurrentImage = useProductsStore((state) => state.setCurrentImage)

  useEffect(() => {
    setCurrentImage(products[0].image)
  }, [setCurrentImage, products])

  return (
    <>
      <VStack
        w="full"
        maxH="100%"
        overflowY="scroll"
        py="10"
        px="5"
        spacing="10"
      >
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </VStack>
    </>
  )
}

const SingleProduct = ({ product }) => {
  const setCurrentImage = useProductsStore((state) => state.setCurrentImage)
  const handleMouseOver = () => {
    setCurrentImage(product.image)
  }

  return (
    <Flex
      color={colors.white}
      _hover={{ transform: 'translateY(-10px)' }}
      transition=".5s ease"
      shadow="dark-lg"
      borderRadius="md"
      onMouseOver={handleMouseOver}
      w="full"
    >
      {/* NAME - DESCRIPTION */}
      <Stack p="2" bg={colors.main} borderLeftRadius="md" w="full">
        <Text fontFamily="Barqish" fontSize="5xl">
          {product.name}
        </Text>
        <Text>{product.description}</Text>
      </Stack>

      {/* PRICE */}
      <Flex
        direction="column"
        w="30%"
        justify="space-between"
        align="center"
        borderRightRadius="md"
        fontWeight="bold"
        color={colors.white}
      >
        <Flex
          align="center"
          h="20%"
          w="full"
          borderTopRightRadius="md"
          border="2px solid"
          borderBottom="none"
          borderColor={colors.main}
          justify="center"
        >
          <Text color={colors.main}>Precio</Text>
        </Flex>
        <Flex
          h="80%"
          w="full"
          justify="center"
          bg={colors.mainLight}
          align="center"
          borderBottomRightRadius="md"
        >
          <Text>₡{product.price}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ProductList
