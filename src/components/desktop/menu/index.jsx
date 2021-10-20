import { Flex, VStack, Stack } from '@chakra-ui/layout'
import { colors } from '../../../globals'
import ResponsiveRow from '../../generics/ResponsiveRow'
import CurrentImage from './currentImage'
import Categories from './categories'
import ProductList from './productList'
import Navbar from '../../nav'

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
      <VStack w="full" h="100vh" bg={colors.white} px="20">
        <Navbar />
        <ResponsiveRow w="full" h="80%">
          <MenuInnerStack mr="5" pt="5">
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
