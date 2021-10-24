import { Flex, HStack, Text } from '@chakra-ui/react'
import CartModal from '../modals/CartModal'

const BotNav = () => {
  return (
    <Flex
      position="fixed"
      bottom="0"
      bg="#f2f2f2"
      zIndex="10"
      maxH="2.5rem"
      w="full"
      p="2"
      borderTop="2px solid #d0d0d0"
      justify="space-between"
      align="center"
    >
      <HStack>
        <Text>What</Text>
      </HStack>
    </Flex>
  )
}

export default BotNav
