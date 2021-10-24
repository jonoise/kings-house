import { Flex } from '@chakra-ui/react'

const BotNav = (props) => {
  return (
    <Flex
      position="fixed"
      bottom="0"
      bg="#f2f2f2"
      zIndex="10"
      maxH="5rem"
      w="full"
      p="2"
      borderTop="2px solid #d0d0d0"
      justify="space-between"
      align="center"
    >
      {props.children}
    </Flex>
  )
}

export default BotNav
