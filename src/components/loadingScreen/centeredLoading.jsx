import { Flex } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { colors } from '../../globals'

const CenteredLoading = () => {
  return (
    <Flex w="full" h="full" justify="center" align="center">
      <Spinner
        thickness="3px"
        speed="1s"
        emptyColor="gray.200"
        color={colors.main}
        size="lg"
      />
    </Flex>
  )
}

export default CenteredLoading
