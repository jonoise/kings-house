import { Text, Flex, VStack, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import { colors } from '../../globals'
import KingTitle from '../home/KingTitle'
import { FcTouchscreenSmartphone } from 'react-icons/fc'
import { MotionStack } from '../motion/components'

const DesktopHome = () => {
  return (
    <Flex w="full" h="100vh" bg={colors.main} justify="center" align="center">
      <VStack color="white">
        <KingTitle title="King's House" />
        <Schedule />
        <DeviceOnly />
      </VStack>
    </Flex>
  )
}

export default DesktopHome

const Schedule = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.65,
        duration: 0.68,
      },
    },
  }

  return (
    <MotionStack
      variants={container}
      initial="hidden"
      animate="show"
      w="full"
      bg="white"
      color="gray.800"
      rounded="md"
      p="5"
    >
      <Text fontWeight="bold">Horario</Text>
      <Text>🗓 viernes, sábado, domingo. de 4p.m. a 10p.m.</Text>
      <Text fontWeight="bold">Whatsapp</Text>
      <Text>☎ 8888-8888</Text>
    </MotionStack>
  )
}

const DeviceOnly = () => {
  return (
    <>
      <Text fontSize="12px">
        Si deseas ordenar por medio del website, deberás ingresar desde tu
        celular.
      </Text>
      <Text fontSize="12px">
        Escanea el código QR con la cámara de tu cel 😀
      </Text>
      <Flex align="center" border="1px solid white" w="50%" h="10vh" p="2">
        <VStack w="50%">
          <FcTouchscreenSmartphone size="3.5rem" />
        </VStack>
        <VStack maxW="50%" maxH="full" justify="center" align="center">
          <Image
            src="/svg/kingshouse-qr.svg"
            width="100"
            height="100"
            alt="Código QR al website."
          />
        </VStack>
      </Flex>
    </>
  )
}
