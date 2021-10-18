import { Stack } from '@chakra-ui/react'
import { MotionFlex, MotionStack, MotionText } from '../motion/components'
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
    <Stack w="full" h="full" className="mainContent_text">
      <MotionStack
        roundedRight="200px"
        variants={container}
        initial="hidden"
        animate="show"
        p="5"
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
      className="mainContent_sandwich"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, right: -200 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.4 }}
    >
      <Image src="/images/sandwich1.png" layout="fill" alt="Sandwich" />
    </MotionFlex>
  )
}

export default MainContent
