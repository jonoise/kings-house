import { Stack, Text, Flex } from '@chakra-ui/react'
import useProductsStore from '../../../stores/useProductsStore'
import SingleProduct from './SingleProduct'

const CategoryItems = ({ category }) => {
  // Este componente se renderiza si hay un stateCategory en el state.
  // Y muestra los platillos de una categoría del menú.

  const setMobileCategory = useProductsStore((state) => state.setMobileCategory)
  const categoriesHash = useProductsStore((state) => state.categoriesHash)
  const currentCategory = categoriesHash[category]

  return (
    <Stack spacing="10">
      <Stack>
        {currentCategory && (
          <>
            <Flex justify="space-between" align="center">
              <Text
                fontWeight="semibold"
                fontSize="20px"
                color="red.900"
                pl="2"
              >
                {currentCategory.name}
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="16px"
                color="red.900"
                pr="2"
                onClick={() => setMobileCategory(null)}
              >
                regresar
              </Text>
            </Flex>
            <Stack>
              {currentCategory.products.map((product) => {
                return <SingleProduct product={product} key={product.id} />
              })}
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default CategoryItems
