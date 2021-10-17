import { Spinner, VStack, Flex } from '@chakra-ui/react'
import { colors } from '../../globals'
import { MotionFlex } from '../motion/components'
import Image from 'next/image'

const LoadingScreen = () => {
  return (
    <MotionFlex
      position="absolute"
      justify="center"
      align="center"
      top={0}
      left={0}
      w="full"
      minH="100vh"
      maxH="100vh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <VStack>
        <MotionFlex
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.7 },
          }}
          w="120px"
          justify="center"
          align="center"
        >
          <Image
            src="/svg/king_logo_img_nav.svg"
            width="150"
            height="200"
            alt="logo"
          />
        </MotionFlex>
        <MotionFlex
          initial={{ y: 40, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1.7 },
          }}
          justify="center"
          align="center"
        >
          <Spinner
            thickness="4px"
            speed="0.80s"
            emptyColor="gray.200"
            color={colors.main}
            size="lg"
          />
        </MotionFlex>
      </VStack>
    </MotionFlex>
  )
}

export default LoadingScreen
