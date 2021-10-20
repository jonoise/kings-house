import { Flex, VStack, Stack } from '@chakra-ui/layout'
import { colors } from '../../../globals'
import ResponsiveRow from '../../generics/ResponsiveRow'
import CurrentImage from './currentImage'
import Categories from './categories'
import ProductList from './productList'

const MenuInnerStack = (props) => {
  return (
    <Stack w={{ base: '100%', lg: '50%' }} {...props}>
      {props.children}
    </Stack>
  )
}

const DesktopMenu = () => {
  return (
    <>
      <VStack w="full" h="100vh" bg={colors.dark} px="20">
        <Flex w="full" h="60px"></Flex>
        <ResponsiveRow w="full" h="80%">
          <MenuInnerStack mr="5">
            <Categories />
            <CurrentImage />
          </MenuInnerStack>
          <MenuInnerStack bg={colors.white} rounded="lg">
            <ProductList />
          </MenuInnerStack>
        </ResponsiveRow>
      </VStack>
    </>
  )
}

export default DesktopMenu
