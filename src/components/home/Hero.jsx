import { Flex, VStack } from '@chakra-ui/react'
import { colors } from '../../globals'
import KingTitle from './KingTitle'
import MainContent from './MainContent'
import CallToAction from './CallToAction'

const Hero = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        minH="100vh"
        maxH="100vh"
        bg="#ffffff"
        color={colors.main}
      >
        <VStack w="full" h="full">
          <KingTitle title="King's House" />
          <MainContent />
          <CallToAction />
        </VStack>
      </Flex>
    </>
  )
}

export default Hero
