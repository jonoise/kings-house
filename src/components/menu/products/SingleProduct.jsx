import { Flex, Stack, Text, Image, Box, Icon, Badge } from '@chakra-ui/react'
import { GiMeat } from 'react-icons/gi'
import { sliceText } from '../../../lib/sliceText'
import useProductDrawer from '../../../stores/useProductDrawer'
import useProductsStore from '../../../stores/useProductsStore'
const SingleProduct = ({ product }) => {
  const onOpen = useProductDrawer((state) => state.onOpen)
  const setCurrentProduct = useProductsStore((state) => state.setCurrentProduct)

  const handleShowProduct = () => {
    setCurrentProduct(product)
    onOpen()
  }

  return (
    <Flex
      w="full"
      h="full"
      bg="#fefef3"
      p="2"
      rounded="md"
      shadow="lg"
      onClick={handleShowProduct}
    >
      <Flex w="30%" minH="5rem" maxH="5rem">
        <Image
          src={product.image}
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
            <Text fontSize="16px" fontWeight="semibold" color="black">
              {product.name}
            </Text>
            <Text fontSize="10px" color="black">
              {sliceText(product.description, 35)}
            </Text>
          </Box>
          <Flex p="2px" rounded="full" border="1px solid black">
            <Icon as={GiMeat} w="18px" h="18px" />
          </Flex>
        </Flex>
        <Flex justify="right" align="end">
          <Badge variant="solid" colorScheme="green">
            ₡{product.price}
          </Badge>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SingleProduct
