import { Flex } from '@chakra-ui/layout'
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'
import { colors } from '../../globals'

const Navbar = () => {
  return (
    <Flex w="full" align="center" justify="space-between" maxH="60px" h="60px">
      <LogoLetras />
      <LogoTipo />
      <HamburgerMenu />
    </Flex>
  )
}

export default Navbar

const LogoLetras = () => {
  return (
    <Flex position="relative" w="200px" h="50px" rounded="md" as="a" href="/">
      <Image
        src="/images/kings_house_lettering.png"
        layout="fill"
        alt="King House logo letras."
      />
    </Flex>
  )
}

const LogoTipo = () => {
  return (
    <Flex position="relative" w="50px" h="50px" rounded="md" as="a" href="/">
      <Image
        src="/images/minimalKing.png"
        layout="fill"
        alt="King House logotipo."
      />
    </Flex>
  )
}

const HamburgerMenu = () => {
  return (
    <Flex w="200px" justify="right">
      <HamburgerIcon
        w="100px"
        boxSize="10"
        color={colors.main}
        cursor="pointer"
        _hover={{ color: colors.secondary }}
        transition="1s all"
        onClick={() => null}
      />
    </Flex>
  )
}
