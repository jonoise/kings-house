import { Flex, Text } from '@chakra-ui/react'
import { colors } from '../../globals'
import { MotionFlex } from '../motion/components'
import LogoGiratorio from './LogoGiratorio'

const actionsOptions = [
  { id: 1, name: 'Menu', initX: -300 },
  { id: 2, name: 'Ordenar', initX: -300 },
]

const CallToAction = () => {
  return (
    <Flex w="full" h="20vh" justify="space-evenly" align="center">
      <SingleAction name="Menu" />
      <SingleAction name="Ordenar" />
      <LogoGiratorio />
    </Flex>
  )
}

export default CallToAction

const SingleAction = ({ name, initX }) => {
  return (
    <MotionFlex
      border="2px solid"
      borderColor={colors.main}
      color={colors.main}
      fontWeight="bold"
      rounded="md"
      w="33%"
      justify="center"
      align="center"
      as="a"
      href="/menu"
      style={{ transition: '.80s all' }}
      _hover={{ bg: colors.main, color: colors.white }}
      h="40%"
    >
      <Text>{name}</Text>
    </MotionFlex>
  )
}
