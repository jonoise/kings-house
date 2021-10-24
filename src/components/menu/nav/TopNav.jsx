import { Flex, Text, HStack, IconButton, Center } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import CartModal from '../drawers/CartDrawer'

const TopNav = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      bg="#f2f2f2"
      zIndex="9"
      minH="10px"
      maxH="4rem"
      w="full"
      p="2"
      justify="space-between"
      align="center"
      borderBottom="2px solid #d0d0d0"
    >
      <Text fontSize="18px" fontWeight="semibold" as="a" href="/">
        <ArrowBackIcon />
      </Text>
      <CartModal />
    </Flex>
  )
}

export default TopNav
