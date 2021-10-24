import { Image } from '@chakra-ui/image'
import { Text, VStack } from '@chakra-ui/layout'
import { colors } from '../../globals'

const MenuHeader = () => {
  return (
    <VStack pt="75px">
      <Image src={'/images/kings_house_lettering.png'} w="240px" alt="Logo " />
    </VStack>
  )
}

export default MenuHeader
