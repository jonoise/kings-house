import { Flex, HStack } from '@chakra-ui/layout'
import { colors } from '../../../globals'
import useProductsStore from '../../../stores/useProductsStore'

const Categories = () => {
  const categories = useProductsStore((state) => state.categories)
  const currentCategory = useProductsStore((state) => state.currentCategory)
  const setCurrentCategory = useProductsStore(
    (state) => state.setCurrentCategory
  )

  const handleChangeCategory = (slug) => {
    setCurrentCategory(slug)
  }

  return (
    <HStack spacing="5" bg={colors.mainLight} p="5" rounded="lg">
      {categories.map((category) => {
        return (
          <Flex
            cursor="pointer"
            minW="100px"
            justify="center"
            align="center"
            py="2"
            px="4"
            rounded="full"
            key={category.id}
            fontFamily="Barqish"
            color={
              category.slug === currentCategory
                ? colors.white
                : colors.secondary
            }
            fontSize="28px"
            bg={category.slug === currentCategory ? colors.main : '#e6e6e6'}
            _hover={{ bg: colors.secondary, color: colors.white }}
            transition="0.4s all"
            onClick={() => handleChangeCategory(category.slug)}
          >
            {category.name}
          </Flex>
        )
      })}
    </HStack>
  )
}
export default Categories
