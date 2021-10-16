import { Flex, Text, Link } from '@chakra-ui/react'
import { colors } from '../../globals'

const TopNav = () => {
  return (
    <Link href="/menu">
      <Flex
        w="full"
        maxH="30px"
        bg={colors.main}
        justify="center"
        align="center"
        color="whitesmoke"
        fontSize="lg"
        fontWeight="300"
        fontFamily="Poppins"
      >
        <Text>{`Ordena en línea!`}</Text>
      </Flex>
    </Link>
  )
}

export default TopNav
