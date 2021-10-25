import { Flex } from '@chakra-ui/layout'
import MenuBody from './body'
import MenuCategories from './categories'
import MenuHeader from './header'
import ProductDrawer from './drawers/ProductDrawer'
import TopNav from './nav/TopNav'

const MobileMenu = () => {
  return (
    <Flex minH="100vh" direction="column">
      <TopNav />
      <MenuHeader />
      <MenuCategories />
      <MenuBody />
      <ProductDrawer />
    </Flex>
  )
}

export default MobileMenu
