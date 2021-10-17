import { Box, Flex } from '@chakra-ui/layout'
import Image from 'next/image'
import { MotionBox, MotionFlex } from '../motion/components'
const LogoGiratorio = () => {
  const logoWidth = 130
  const logoHeight = 130
  return (
    <MotionFlex position="absolute" bottom="170" left="10">
      <Flex position="relative" justify="center" align="center">
        <MotionFlex
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 12 }}
          position="absolute"
          top="-3"
          right="-3"
          w="120%"
          h="120%"
          justify="center"
          align="center"
        >
          <Image
            src="/svg/circularWords.svg"
            layout="fill"
            alt="Logo Giratorio"
          />
        </MotionFlex>
        <Image
          src="/svg/minimalKing.svg"
          width={logoWidth}
          height={logoHeight}
          alt="Logo Giratorio"
        />
      </Flex>
    </MotionFlex>
  )
}

export default LogoGiratorio
