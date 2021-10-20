import { Flex } from '@chakra-ui/layout'

const ResponsiveRow = (props) => {
  return (
    <Flex {...props} w="full" direction={{ base: 'column', lg: 'row' }}>
      {props.children}
    </Flex>
  )
}

export default ResponsiveRow
