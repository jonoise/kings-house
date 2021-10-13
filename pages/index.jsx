import Image from 'next/image'
import { Divider, Flex, Text, VStack } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import lottieJson from '../6519-cooking.json'
import { colors } from '../globals'
export default function Home() {
  return (
    <VStack
      w="full"
      minH="100vh"
      justify="center"
      align="center"
      textAlign="center"
    >
      <Flex
        minW={['240px']}
        maxW="300px"
        minH={['60px']}
        bg="white"
        position="relative"
      >
        <Image src="/images/kings_house_lettering.png" layout="fill" alt="" />
      </Flex>
      <Lottie animationData={lottieJson} autoplay={true} loop={true} />
      <Text fontWeight="bold">ESTAMOS COCINANDO EL PLATO PRINCIPAL.</Text>
      <Divider />
      <Text fontSize="14px" fontWeight="bold">
        PRONTO EN SAN RAMÓN.
      </Text>
    </VStack>
  )
}
