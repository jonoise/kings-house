import { Image } from '@chakra-ui/image'
import { Flex } from '@chakra-ui/layout'
import { AnimatePresence, motion } from 'framer-motion'
import useProductsStore from '../../../stores/useProductsStore'
import CenteredLoading from '../../loadingScreen/centeredLoading'
import { MotionFlex } from '../../motion/components'

const CurrentImage = () => {
  const currentImage = useProductsStore((state) => state.currentImage)
  return (
    <AnimatePresence>
      <Flex w="full" h="full" overflow="hidden" rounded="md">
        {!currentImage ? (
          <motion.div exit={{ opacity: 0 }}>
            <CenteredLoading />
          </motion.div>
        ) : (
          <MotionFlex
            w="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65 }}
          >
            <Image
              src={currentImage}
              w="full"
              alt="Producto actualmente seleccionado."
              objectFit="cover"
            />
          </MotionFlex>
        )}
      </Flex>
    </AnimatePresence>
  )
}

export default CurrentImage
