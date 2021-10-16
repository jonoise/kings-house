import { Stack } from '@chakra-ui/react'

const Container = (props) => {
  return (
    <Stack w="full" px={{ base: '2', lg: '40', xl: '96' }} {...props}>
      {props.children}
    </Stack>
  )
}

export default Container
