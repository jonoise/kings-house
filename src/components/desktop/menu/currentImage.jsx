import { Image } from '@chakra-ui/image'
import { Flex } from '@chakra-ui/layout'
import useProductsStore from '../../../stores/useProductsStore'

const CurrentImage = () => {
  const currentImage = useProductsStore((state) => state.currentImage)
  return (
    <Flex w="full" h="full" overflow="hidden" rounded="md">
      <Image
        src={currentImage}
        w="full"
        alt="Producto actualmente seleccionado."
        objectFit="cover"
      />
    </Flex>
  )
}

export default CurrentImage
