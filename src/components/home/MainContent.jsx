import { Stack, Flex, Text } from '@chakra-ui/react'
import { MotionFlex, MotionStack, MotionText } from '../motion/components'
import { colors } from '../../globals'
import LogoGiratorio from './LogoGiratorio'
import Image from 'next/image'
const MainContent = () => {
  return (
    <Stack
      position="relative"
      overflow="hidden"
      h="45vh"
      w="full"
      justify="space-between"
    >
      <Copy />
      <Sandwich />
    </Stack>
  )
}

const Copy = () => {
  const container = {
    hidden: { x: -100 },
    show: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  return (
    <Stack>
      <MotionStack
        roundedRight="200px"
        variants={container}
        initial="hidden"
        animate="show"
        p="5"
        fontSize="22px"
        lineHeight="1"
        fontWeight="bold"
        bg="yellow.200"
      >
        <MotionText variants={item}>UN SANDWICH</MotionText>
        <MotionText variants={item}>PARA TODOS</MotionText>
        <MotionText variants={item}>QUE SABE</MotionText>
        <MotionText variants={item}>COMO POCOS</MotionText>
      </MotionStack>
    </Stack>
  )
}

const Sandwich = () => {
  return (
    <MotionFlex
      w="400px"
      h="320px"
      position="absolute"
      top="-10"
      right="-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, right: -200 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4 }}
    >
      <Image src="/images/sandwich1.png" layout="fill" alt="Sandwich" />
    </MotionFlex>
  )
}

export default MainContent

const SandwichBackground = () => {
  return <MotionFlex></MotionFlex>
}
