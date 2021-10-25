import { Stack, Text } from '@chakra-ui/react'
import useProductsStore from '../../stores/useProductsStore'
import RestaurantSpecifics from './products/RestaurantSpecifics'
import CategoryItems from './products/CategoryItems'
const MenuBody = () => {
  const category = useProductsStore((state) => state.mobileCategory)
  return (
    <Stack minH="60vh" w="full" bg="white" pb="4rem">
      {category ? (
        // Desplegar items.
        <CategoryItems category={category} />
      ) : (
        // Desplegar todo el menu
        <RestaurantSpecifics />
      )}
    </Stack>
  )
}

export default MenuBody
