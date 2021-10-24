import { Flex } from '@chakra-ui/layout'
import MenuBody from './body'
import MenuCategories from './categories'
import MenuHeader from './header'
import ProductModal from './modals/ProductModal'
import BotNav from './nav/BotNav'
import TopNav from './nav/TopNav'

const MobileMenu = () => {
  return (
    <Flex minH="100vh" direction="column">
      <TopNav />
      <MenuHeader />
      <MenuCategories />
      <MenuBody />
      <ProductModal />
      <BotNav />
    </Flex>
  )
}

export default MobileMenu
